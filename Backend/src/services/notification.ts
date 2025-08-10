import mongoose from "mongoose";
import { NotificationModel } from "../db/models/notifications.model";

export class NotificationService {
  message;
  userID;
  status;
  authorID;
  blogID;

  constructor(
    message: string,
    userID: mongoose.Types.ObjectId,
    authorID: mongoose.Types.ObjectId,
    blogID: mongoose.Types.ObjectId
  ) {
    this.message = message;
    this.userID = userID;
    this.status = "UNREAD";
    this.authorID = authorID;
    this.blogID = blogID;
  }

  async storeNotificationInDb() {
    try{
        const dataStored = await NotificationModel.create({
            message: this.message,
            userID: this.userID,
            authorID: this.authorID,
            blogID: this.blogID,
            status: this.status
        })
        return dataStored;
    }catch(e){
        console.log("@error while storing the notification", e);
        return null;
    }
  }
}
