import { Router } from "express";
import userController from "../../controllers/user/index.js";

const userRouter = Router();

userRouter.get("/user", userController.get);

export default userRouter;
