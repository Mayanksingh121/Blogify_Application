import mongoose from "mongoose";
import { IUser } from "../../types/db.type";

const userSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true, minLength: 4, maxLendth: 50 },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
      lowerCase: true,
      trim: true,
    },
    authType: {
      type: String,
      required: true,
      enum: ["local", "google", "apple"],
    },
    password: {
      type: String,
      required: false,
    },
    dob: { type: Date, required: false },
    gender: {
      type: String,
      required: false,
      validate(value: string){
        if(!["Male", "Female", "Others"].includes(value)){
          throw new Error("Gender is not valid")
        }
      }
    },
    profileUrl: {
      type: String,
      required: false
    },
    phoneNumber: {
      type: Number,
      required: false
    },
  },
  { timestamps: true }
);


// learn about pre in mongoose

export const User = mongoose.model<IUser>("User", userSchema);
