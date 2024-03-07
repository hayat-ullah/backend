import {Router } from "express";
import PostController from "../../controller/post/index.js";
import postvalidator from "../../validator/index.js";
const postRoutes = Router();
postRoutes.get("/post", PostController.getAll);
postRoutes.post("/post",postvalidator.creat, PostController.create);
postRoutes.put("/post/:postId", PostController.update);
// postRoutes.get("/post/:postId", PostController.getOne);

export default postRoutes;