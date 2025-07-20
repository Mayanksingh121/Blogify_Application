import mongoose from "mongoose";

export interface IUser{
    name: string;
    email: string;
    dob: Date;
    authType: string;
    password: string;
    gender: string;
    profileUrl: string;
    phoneNumber: number
}

export interface IOTP{
  otp: number;
  email: string;
  isUsed: boolean;
}

export interface IBlog{
  title: mongoose.Schema.Types.ObjectId;
  category: string;
  content: string;
  images: string[];
  author: any
}