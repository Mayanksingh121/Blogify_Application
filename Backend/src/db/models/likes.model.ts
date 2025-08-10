import mongoose, { Schema } from "mongoose";
import { ILikes } from "../../types/db.type";

const likesSchmea = new Schema<ILikes>({
    blogId: {
        type: Schema.Types.ObjectId,
        ref: "Blog",
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
}, {
    timestamps: true
})


export const LikesModel = mongoose.model("Likes",likesSchmea);
