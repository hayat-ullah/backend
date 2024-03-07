import { Router } from "express";
import commitController from "../../controller/commit/index.js";

const commitRoutes = Router();
commitRoutes.get("/commit", commitController.getAll);
commitRoutes.post("/commit", commitController.create);


export default commitRoutes;