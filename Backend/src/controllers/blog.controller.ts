import { Request, Response } from "express";

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

        

    }catch(e){
        console.log("@error at blog view endpoint");
        res.status(500).json({message: "Internal Server Error"});
    }
}

export const blogLiked = async(req:Request, res:Response)=>{
    try{

    }catch(e){
        console.log("@error at blog like endpoint");
        res.status(500).json({message: "Internal Server Error"});
    }
}
