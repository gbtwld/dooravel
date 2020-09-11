import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.home, (req, res) => res.send("USER"));
userRouter.get(routes.editProfile, (req, res) => res.send("EDIT_PROFILE"));
userRouter.get(routes.changePassword, (req, res) =>
  res.send("CHANGE_PASSWORD")
);
userRouter.get(routes.profile, (req, res) => res.send("PROFILE"));

export default userRouter;
