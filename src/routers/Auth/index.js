import { Router } from "express";
import AuthController from "../../controller/Auth/index.js";
import AuthenticateMiddleware from "../../middleware/authentication.js";

const authRouter = Router();

authRouter.post("/login",AuthenticateMiddleware, AuthController.login);
export default authRouter;
