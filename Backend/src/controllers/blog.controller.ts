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