import express from "express";
import routes from "../routes";
import {
  homeControl,
  joinControl,
  loginControl,
  logoutControl,
} from "../controllers/userController";
import { searchControll } from "../controllers/seriesController";

const globalRouter = express.Router();

globalRouter.get(routes.home, homeControl);
globalRouter.get(routes.join, joinControl);
globalRouter.get(routes.login, loginControl);
globalRouter.get(routes.logout, logoutControl);
globalRouter.get(routes.search, searchControll);

export default globalRouter;
