import { Request, Response } from "express";
import { sendSignupOTPEmail } from "../services/emailService";
import { User } from "../db/models/user.model";
import { OtpModel } from "../db/models/otp.model";
import jwt from "jsonwebtoken";
import { checkPassword, encryptPassword } from "../utils/bcrypt";
import validator from "validator";
import redisClient from "../db/redisConnection";
import { verifyGoogleToken } from "../services/socialAuth";

export const loginController = async (req: Request, res: Response) => {
  try {
    const { emailID, password } = req.body;
    if (!emailID || !password) {
      res.status(400).json({ message: "Insufficient Credentials" });
      return;
    }

    const user = await User.findOne({ email: emailID });

    if (!user) {
      res.status(400).json({ message: "Invalid Credentials" });
      return;
    }

    const isPasswordSame = await checkPassword(password, user.password);
    if (!isPasswordSame) {
      res.status(401).json({ message: "Invalid Credentials" });
      return;
    }

    if (!process.env.JWT_SECRET_KEY) {
      throw new Error("Internal Server Error");
    }

    const token = jwt.sign(
      {
        _id: user._id,
        email: emailID,
      },
      process.env.JWT_SECRET_KEY
    );

    const resObj = {
      message: "Login successfull",
      token: token,
    };
    res.status(200).json(resObj);
  } catch (e) {
    console.log("Error while login " + e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const signupController = async (req: Request, res: Response) => {
  try {
    const { emailID } = req.body;
    if (!emailID) {
      res.status(400).json({ message: "Email id is required" });
      return;
    }

    const user = await User.findOne({ email: emailID });
    if (user) {
      res.status(400).json({ message: "User Already Exists" });
      return;
    }

    const userOTP = Math.floor(1000 + Math.random() * 9000);
    sendSignupOTPEmail(emailID, userOTP);
    await OtpModel.findOneAndUpdate(
      { email: emailID },
      {
        otp: userOTP,
        isUsed: false,
      },
      {
        upsert: true,
        new: true,
      }
    );
    res.status(200).json({ message: "Email sent to the user email address" });
  } catch (e) {
    console.log("Error in signup controller" + e);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const verifyOTPController = async (req: Request, res: Response) => {
  try {
    const { emailID, OTP } = req.body;
    if (!emailID || !OTP) {
      res.status(400).json({ messag: "Insufficient Data" });
      return;
    }

    const userOTP = await OtpModel.findOne({
      email: emailID,
    });

    if (!userOTP) {
      res.status(404).json({ message: "No Otp requested for the email" });
      return;
    }

    if (userOTP?.isUsed) {
      res.status(400).json({ message: "OTP already used" });
      return;
    }

    if (userOTP?.otp == OTP) {
      await OtpModel.findOneAndUpdate(
        {
          email: emailID,
        },
        {
          isUsed: true,
        }
      );

      if (!process.env.JWT_SECRET_KEY) {
        res.status(500).json({ message: "Internal Server Error" });
        return;
      }
      const token = jwt.sign({ email: emailID }, process.env.JWT_SECRET_KEY, {
        expiresIn: "10m",
      });
      const isDataSet = await redisClient.set(emailID, token, { EX: 60 * 10 });
      if (!isDataSet) {
        res.status(500).json({ message: "Internal Server Error" });
        return;
      }
      res
        .status(200)
        .json({ message: "OTP verified successfully", token: token });
    } else {
      res.status(400).json({ message: "Invalid OTP" });
    }
  } catch (e) {
    console.log("Error in OTP verify " + e);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const appleLoginController = (req: Request, res: Response) => {};

export const googleLoginController = async (req: Request, res: Response) => {
  try {
    const token: any = req.headers.authorization;
    if (!token) {
      res.status(400).json({ message: "Token is required" });
      return;
    }
    const response = await verifyGoogleToken(token);
    if (!response) {
      res.status(401).json({ message: "Invalid Credentials" });
      return;
    }
    const { email, name } = response;

    if (!email || !name) {
      throw new Error("Internal server error");
    }

    if (!process.env.JWT_SECRET_KEY) {
      res.status(500).json({ message: "Internal Server Error" });
      return;
    }

    const user = await User.findOneAndUpdate(
      {
        email,
      },
      {
        email: email,
        authType: "google",
        name: name,
      },
      {
        upsert: true,
        new: true,
      }
    );


    const userToken = jwt.sign({ email: email, _id: user?._id }, process.env.JWT_SECRET_KEY);

    res
      .status(200)
      .json({ message: "Signed in successfully", token: userToken });
  } catch (e) {
    console.log("@error at google controller ", e);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createProfileController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { emailID, name, dob, gender, password, authType, phoneNumber } =
      req.body;

    const isEmailValid = validator.isEmail(emailID);

    if (!isEmailValid) {
      res.status(400).json({ message: "Invalid email Id" });
      return;
    }

    if (!["local", "apple", "google"].includes(authType)) {
      res.status(400).json({ message: "Request body is not valid" });
      return;
    }

    const existingUser = await User.findOne({
      email: emailID,
    });

    if (existingUser) {
      res.status(400).json({ message: "User already present" });
      return;
    }

    let requestObj;
    if (authType == "local") {
      const hashedPassword = await encryptPassword(password);
      requestObj = {
        name,
        email: emailID,
        authType,
        gender,
        dob,
        password: hashedPassword,
        phoneNumber,
      };
    }

    const createdUser = await User.create(requestObj);
    if (!createdUser) {
      res.status(400).json({ message: "Request body is not valid" });
      return;
    }

    if (!process.env.JWT_SECRET_KEY) {
      res.status(500).json({ message: "Internal Server Error" });
      return;
    }
    const token = jwt.sign({ email: emailID }, process.env.JWT_SECRET_KEY);

    await redisClient.del([emailID]);
    res.status(200).json({ message: "Profile created successfully", token });
  } catch (e) {
    console.log("Error in create profile controller " + e);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteAccount = async (req: Request, res: Response) => {
  try {
  } catch (e) {
    console.log("@error while deleting the account ", e);
    res.status(500).json({ messag: "Internal Server Error" });
  }
};

export const updateProfileController = async (req: Request, res: Response) => {
  try {
    const { userId, name, dob, gender, profileUrl } = req.body;
    const userUpdated = await User.findOneAndUpdate(
      {
        _id: userId,
      },
      {
        name,
        dob,
        gender,
        profileUrl,
      },
      {
        returnDocument: "after",
      }
    );

    if (!userUpdated) {
      res.status(400).json({ message: "Invalid update object" });
      return;
    }

    res.status(200).json({ message: "Profile Updated Successfully" });
  } catch (e) {
    console.log("@error while updating the user data");
    res.status(500).json({ message: "Can't update user at the moment" });
  }
};

export const getUserProfileController  = async (req:Request, res: Response)=>{
  try{
    const {userId} = req.body;
    const userData = await User.findOne({
      _id: userId
    });
    
    if(!userData){
      res.status(401).json({message: "User not found"});
      return;
    }

    const {name, profileUrl, email, phoneNumber, gender, dob} = userData;
    res.json({
      message: "User Data Fetched successfully",
      userDetails: {
        name,
        profileUrl,
        email,
        phoneNumber,
        gender,
        dob
      }
    })
  }catch(e){
    console.log("@error at the get profile controller");
    res.status(500).json({message: "error while getting the user profile"});
  }
}