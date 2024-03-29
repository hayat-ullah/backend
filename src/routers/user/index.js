import { Router } from "express";
import UserController from "../../controller/user/index.js";

const userRoutes = Router();

userRoutes.post("/user", UserController.create);
userRoutes.put("/user/:userId", UserController.update);
// userRoutes.post("/user/follow",UserController.follow);
// userRoutes.get("/user/getone",UserController.getone);
userRoutes.post("/user/follow",UserController.follow )

export default userRoutes;