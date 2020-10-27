import express from "express";
import {
  postDeleteControll,
  postEditControll,
  postWriteControll,
  postDetailControll,
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
seriesRouter.post(routes.seriesCreate, seriesCreateControll);

seriesRouter.get(routes.seriesDetail(), seriesDetailControll);

seriesRouter.get(routes.seriesEdit(), seriesEditControll);
seriesRouter.post(routes.seriesEdit(), seriesEditControll);

seriesRouter.get(routes.seriesDelete(), seriesDeleteControll);

seriesRouter.get(routes.postWrite(), postWriteControll);
seriesRouter.post(routes.postWrite(), postWriteControll);

seriesRouter.get(routes.postDetail(), postDetailControll);

seriesRouter.get(routes.postEdit(), postEditControll);
seriesRouter.post(routes.postEdit(), postEditControll);

seriesRouter.get(routes.postDelete(), postDeleteControll);

export default seriesRouter;
