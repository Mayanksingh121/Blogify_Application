import express from "express";
import { getBlogsList, trendingBlog } from "../controllers/blog.controller";

const blogRouter = express.Router();

blogRouter.get("/trending",trendingBlog);
blogRouter.get("get-all-blogs",getBlogsList);



export default blogRouter;