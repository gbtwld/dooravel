import express from "express";
import {
  postDeleteControll,
  postEditControll,
  postWriteControll,
  seriesControll,
  seriesCreateControll,
  seriesDeleteControll,
  seriesDetailControll,
  seriesEditControll,
} from "../controllers/seriesController";
import routes from "../routes";

const seriesRouter = express.Router();

seriesRouter.get(routes.home, seriesControll);
seriesRouter.get(routes.seriesCreate, seriesCreateControll);
seriesRouter.get(routes.seriesDetail, seriesDetailControll);
seriesRouter.get(routes.seriesEdit, seriesEditControll);
seriesRouter.get(routes.seriesDelete, seriesDeleteControll);

seriesRouter.get(routes.postWrite, postWriteControll);
seriesRouter.get(routes.postEdit, postEditControll);
seriesRouter.get(routes.postDelete, postDeleteControll);

export default seriesRouter;
