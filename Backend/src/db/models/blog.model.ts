import mongoose from "mongoose";
import { IBlog } from "../../types/db.type";

const blogSchema = new mongoose.Schema<IBlog>(
  {
    title: {
      type: String,
      required: true,
      index: 1
    },
    category: {
      type: String,
      required: true,
      index: 1
    },
    content: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    views: {
      type: String,
      required: false,
    },
    likesCount: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const BlogModel = mongoose.model<IBlog>("Blog", blogSchema);
