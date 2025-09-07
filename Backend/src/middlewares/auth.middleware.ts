import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import redisClient from "../db/redisConnection";

export const verifyTempToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void>=> {
  try {
    const token : any = req.headers.authorization;
    console.log(req.headers);
    if (!process.env.JWT_SECRET_KEY) {
      res.status(500).json({message : "Internal server error"});
      return;
    }

    const decodedToken: any = jwt.decode(token);

    if(!decodedToken){
      res.status(500).json({message: "Internal Server Error"});
      return;
    }

    const userEmailID = decodedToken?.email;
    const redisToken = await redisClient.get(userEmailID);

    if(!redisToken){
      res.status(401).json({message: "Unauthorized User"});
      return;
    }

    const isTokenVerified = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!isTokenVerified) {
      res.status(401).json({ message: "Not an authorized user" });
      return;
    }

    req.body.emailID = userEmailID;
    next();
  } catch (e: unknown) {
    res.status(500).json({message: "Internal server error"});
  }
};

export const verifySessionToken = async(req:Request, res:Response, next: NextFunction)=>{
  try{
    const token : any= req.headers.Authorization;

    if(!token){
      res.status(401).json({message: "unauthorized user"});
      return;
    }

    if(!process.env.JWT_SECRET_KEY){
      res.status(500).json({message: "Internal server error"});
      return;
    }

    const isTokenVerified = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!isTokenVerified) {
      res.status(401).json({ message: "Not an authorized user" });
      return;
    }

    const decodedToken: any = jwt.decode(token);

    if(!decodedToken){
      res.status(500).json({message: "Internal Server Error"});
      return;
    }

    const userEmailID = decodedToken?.email;
    const userID = decodedToken?._id;
    req.body.emailID = userEmailID;
    req.body.userId = userID;
    next();
  }catch(e){
    console.log("Error in jwt verification");
    res.status(500).json({message: "Internal Server error"});
  }
}


export const addImageToCDN = async(req:Request, res:Response, next:NextFunction)=>{
  try{
    
  }catch(e){
    res.status(500).json({message: "Internal Server Error ",e});
  }
}