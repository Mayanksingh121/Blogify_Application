import express from "express";
import { blogLiked, blogViewed, getBlogsList, trendingBlog } from "../controllers/blog.controller";
import { verifySessionToken } from "../middlewares/auth.middleware";

const blogRouter = express.Router();

blogRouter.get("/trending",verifySessionToken,trendingBlog);
blogRouter.get("get-all-blogs",verifySessionToken,getBlogsList);
blogRouter.post("/like",verifySessionToken,blogLiked);
blogRouter.post("/view",verifySessionToken,blogViewed);



export default blogRouter;