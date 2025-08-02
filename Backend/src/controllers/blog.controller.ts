import { Request, Response } from "express";
import { ViewsModel } from "../db/models/views.model";
import { BlogModel } from "../db/models/blog.model";

export const trendingBlog = async(req:Request,res:Response)=>{
    try{
        
    }catch(e){
        console.log("@error at trending blog");
        res.status(500).json({message: "Internal Server Error"})
    }
}


// remember to make it as paginated endpoint
export const getBlogsList = async(req:Request, res:Response)=>{
    try{

    }catch(e){
        console.log("@error at getting blog list");
        res.status(500).json({message: "Internal Server Error"});
    }
}


export const blogViewed = async(req:Request, res:Response)=>{
    try{
        const userId = req.body.userId;
        const blogId = req.body.blogId;

        if (!userId || !blogId) {
            res.status(400).json({ message: "Missing userId or blogId" });
            return;
        }

        const updatedBlogData = await BlogModel.findOneAndUpdate({
            _id:  blogId
        }, {
            $inc: {views: 1}
        });

        if(!updatedBlogData){
            res.status(404).json({message: "blog not found"});
            return;
        }

        await ViewsModel.findOneAndUpdate({
            $and: [
                {viewerId: userId},
                {blogId: blogId}
            ]
        }, {
            viewerId: userId,
            blogId: blogId,
        }, {
            upsert: true
        })

        res.status(200).json({message: "view added"})

    }catch(e){
        console.log("@error at blog view endpoint");
        res.status(500).json({message: "Internal Server Error"});
    }
}

export const blogLiked = async(req:Request, res:Response)=>{
    try{
        const {userId, blogId} = req.body;
        if(!userId || !blogId){
            res.status(400).json({message: "Missing userId or blogId"});
            return;
        }

    }catch(e){
        console.log("@error at blog like endpoint");
        res.status(500).json({message: "Internal Server Error"});
    }
}
