import express from "express";
import authRouter from "./auth.route";
import blogRouter from "./blog.route";

const mainRouter = express.Router();

mainRouter.use("/auth",authRouter);
mainRouter.use("/blog",blogRouter)

export default mainRouter;