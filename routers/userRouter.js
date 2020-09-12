import express from "express";
import {
  changePasswordControl,
  editProfileControl,
  profileControl,
  usersControl,
} from "../controllers/userController";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.home, usersControl);
userRouter.get(routes.editProfile, editProfileControl);
userRouter.get(routes.changePassword, changePasswordControl);
userRouter.get(routes.profile, profileControl);

export default userRouter;
