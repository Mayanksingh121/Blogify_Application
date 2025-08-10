import mongoose from "mongoose";
import { INotification } from "../../types/db.type";

const NotificationSchema = new mongoose.Schema<INotification>({
    authorID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
        index: true
    },
    message: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    blogID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Blog"
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
})


export const NotificationModel = mongoose.model<INotification>("Notification", NotificationSchema);