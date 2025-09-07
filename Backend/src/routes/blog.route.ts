import express from "express";
import {addBlog, blogLiked, blogViewed, getBlogsList, getUserSearchedBlog, getUserStatistics, trendingBlog } from "../controllers/blog.controller";
import { verifySessionToken } from "../middlewares/auth.middleware";
import { upload } from "../services/config";

const blogRouter = express.Router();

blogRouter.get("/trending",verifySessionToken,trendingBlog);
blogRouter.get("get-all-blogs",verifySessionToken,getBlogsList);
blogRouter.post("/like",verifySessionToken,blogLiked);
blogRouter.post("/view",verifySessionToken,blogViewed);
blogRouter.get("/get-stats", verifySessionToken,getUserStatistics);
blogRouter.get("/autoSuggest",verifySessionToken,getUserSearchedBlog)
blogRouter.post("/addBlog",verifySessionToken,upload.single("image") ,addBlog)



export default blogRouter;