import mongoose from "mongoose";

export interface IUser{
    name: string;
    email: string;
    dob: Date;
    authType: string;
    password: string;
    gender: string;
    profileUrl: string;
    phoneNumber: number;
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
  author: any;
  views: number;
  likesCount: number;
}


export interface ILikes{
  blogId: mongoose.Schema.Types.ObjectId;
  userId: mongoose.Schema.Types.ObjectId;
}
export interface IViews{
  blogId: mongoose.Schema.Types.ObjectId;
  viewerId: mongoose.Schema.Types.ObjectId;
}


export interface INotification{
  authorID: mongoose.Schema.Types.ObjectId,
  blogID: mongoose.Schema.Types.ObjectId,
  userID: mongoose.Schema.Types.ObjectId,
  message: string;
  status: "UNREAD" | "READ";
}