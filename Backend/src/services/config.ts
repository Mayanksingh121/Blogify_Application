import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

export const upload = multer({ storage: storage });

//cloudinary setup
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const uploadOnCloudnary = async (localFilPath: string) => {
  try {
    if(!localFilPath){
      return null;
    }
    const resposneFromCDN = await cloudinary.uploader.upload(localFilPath, {
      resource_type: 'image'
    });
    // fs.unlinkSync(localFilPath);
    return resposneFromCDN;
  } catch (e) {
    fs.unlinkSync(localFilPath);
    return null;
  }
};
