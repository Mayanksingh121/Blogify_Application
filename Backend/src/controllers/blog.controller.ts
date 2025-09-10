import { Request, Response } from "express";
import { ViewsModel } from "../db/models/views.model";
import { BlogModel } from "../db/models/blog.model";
import { LikesModel } from "../db/models/likes.model";
import { NotificationModel } from "../db/models/notifications.model";
import { NotificationService } from "../services/notification";
import { User } from "../db/models/user.model";
import { uploadOnCloudnary } from "../services/config";
import fs from "fs";
import mongoose from "mongoose";

export const trendingBlog = async (req: Request, res: Response) => {
  try {
  } catch (e) {
    console.log("@error at trending blog");
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// remember to make it as paginated endpoint
export const getBlogsList = async (req: Request, res: Response) => {
  try {
  } catch (e) {
    console.log("@error at getting blog list");
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const blogViewed = async (req: Request, res: Response) => {
  try {
    const userId = req.body.userId;
    const blogId = req.body.blogId;

    if (!userId || !blogId) {
      res.status(400).json({ message: "Missing userId or blogId" });
      return;
    }

    const updatedBlogData = await BlogModel.findOneAndUpdate(
      {
        _id: blogId,
      },
      {
        $inc: { views: 1 },
      }
    );

    if (!updatedBlogData) {
      res.status(404).json({ message: "blog not found" });
      return;
    }

    await ViewsModel.findOneAndUpdate(
      {
        $and: [{ viewerId: userId }, { blogId: blogId }],
      },
      {
        viewerId: userId,
        blogId: blogId,
      },
      {
        upsert: true,
      }
    );

    res.status(200).json({ message: "view added" });
  } catch (e) {
    console.log("@error at blog view endpoint");
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const blogLiked = async (req: Request, res: Response) => {
  try {
    const { userId, blogId } = req.body;

    if (!userId || !blogId) {
      res.status(400).json({ message: "Missing userId or blogId" });
      return;
    }

    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({ message: "User doesn't exist" });
      return;
    }

    const blog = await BlogModel.findById(blogId);
    if (!blog) {
      res.status(404).json({ message: "Blog not found" });
      return;
    }

    const existingLike = await LikesModel.findOne({ blogId, userId });

    if (existingLike) {
      await LikesModel.deleteOne({ blogId, userId });
      await BlogModel.findByIdAndUpdate(blogId, { $inc: { likesCount: -1 } });
      await NotificationModel.deleteOne({ blogID: blogId, userID: userId });

      res.status(200).json({ message: "Blog unliked" });
      return;
    }

    await LikesModel.create({ blogId, userId });
    const likedBlogData = await BlogModel.findByIdAndUpdate(blogId, {
      $inc: { likesCount: 1 },
    });
    const message = `${user.name} liked your blog ${likedBlogData?.title}`;
    const notification = new NotificationService(
      message,
      userId,
      blog.author,
      blogId
    );
    await notification.storeNotificationInDb();

    res.status(200).json({ message: "Like added successfully" });
  } catch (e) {
    console.error("@error at blog like endpoint", e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getUserStatistics = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;

    const blogsData = await BlogModel.find({
      author: userId,
    });

    let likesCount = 0;
    let viewsCount = 0;
    const filteredData = blogsData?.map((item) => {
      const data: any = {};
      data.title = item.title;
      data.category = item.category;
      data.content = item.content;
      data.images = item.images;
      data.views = item.views;
      data.likesCount = item.likesCount;
      likesCount += item.likesCount;
      viewsCount += item.views;
      return data;
    });

    const dataToSendBack = {
      allBlogs: filteredData,
      likesCount: likesCount,
      viewsCount: viewsCount,
    };

    res.status(200).json({
      message: "Data fetched successfully",
      data: dataToSendBack,
    });
  } catch (e) {
    console.log("@error while getting user blogInformation");
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getUserSearchedBlog = async (req: Request, res: Response) => {
  try {
    const { userInput } = req.query;
    const reqBlogs = await BlogModel.find({
      $or: [
        {
          title: { $regex: userInput, $options: 'i' },
        },
        {
          category: {$regex: userInput, $options: 'i'},
        },
      ],
    }).limit(10).select("title category _id")

    res.json({
      searchResults: reqBlogs
    })
  } catch (e) {
    console.log("@error while getting the ");
    res.status(500).json({message: "Internal Server Error"})
  }
};


export const addBlog = async (req:any, res:Response)=>{
  try{
    if (!req.file) {
      res.status(400).json({ error: "No file uploaded" });
      return;
    };


    const {title,category, content}: {
      title: string,
      category: string,
      content: string,
    } =  req.body;

    const userId:mongoose.Schema.Types.ObjectId =  req.userId;

    if(!title || !category || !content || content?.trim()?.length<300 || !userId){
      fs.unlinkSync(req?.file?.path);
      res.status(400).json({message: "All Field are mandatory"});
      return;
    }

    const userExist = await User.findOne({
      _id: userId
    })

    if(!userExist){
      fs.unlinkSync(req?.file?.path);
      res.status(401).json({message: "User Doesn't Exist"});
      return;
    }

    const responseFromCDN = await uploadOnCloudnary(req.file.path);

    if(!responseFromCDN){
      throw new Error("Can't Upload to cdn")
    }
    
    const trimedTitle = title?.trim();
    const trimedCategory = category?.trim();
    const trimedContent = content?.trim();

    await BlogModel.create({
      title: trimedTitle,
      category: trimedCategory,
      content: trimedContent,
      images: [responseFromCDN?.url],
      author: userId
    })

    res.status(200).json({message: "Blog added successfully", url: responseFromCDN?.url});
  }catch(e){
    console.log("@error while adding the blog ",e);
    res.status(500).json({message: "Internal Server Error"});
  }
}
