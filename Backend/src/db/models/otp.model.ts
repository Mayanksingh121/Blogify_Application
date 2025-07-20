import mongoose from "mongoose";
import { IOTP } from "../../types/db.type";

const OTPSchema = new mongoose.Schema<IOTP>({
    otp: {type: Number, required: true},
    email: {type: String, required: true, unique: true},
    isUsed: {type: Boolean, required: false, default: false},
},{timestamps: true})

OTPSchema.index({ createdAt: 1 , email: 1}, { expireAfterSeconds: 300});

export const OtpModel = mongoose.model<IOTP>("OTP", OTPSchema);