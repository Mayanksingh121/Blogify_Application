import mongoose from "mongoose";
import { IViews } from "../../types/db.type";

const ViewsSchema = new mongoose.Schema<IViews>({
    blogId: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    viewerId: {
        type: mongoose.Schema.ObjectId,
        required: true
    }
},{
    timestamps: true
})


export const ViewsModel = mongoose.model<IViews>("Views", ViewsSchema);