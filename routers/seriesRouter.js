import express from "express";
import routes from "../routes";

const seriesRouter = express.Router();

seriesRouter.get(routes.home, (req, res) => res.send("SERIES"));
seriesRouter.get(routes.seriesCreate, (req, res) => res.send("SERIES_CREATE"));
seriesRouter.get(routes.seriesDetail, (req, res) => res.send("SERIES_DETAIL"));
seriesRouter.get(routes.seriesEdit, (req, res) => res.send("SERIES_EDIT"));
seriesRouter.get(routes.seriesDelete, (req, res) => res.send("SERIES_DELETE"));

seriesRouter.get(routes.postWrite, (req, res) => res.send("POST_WRITE"));
seriesRouter.get(routes.postEdit, (req, res) => res.send("POST_EDIT"));
seriesRouter.get(routes.postDelete, (req, res) => res.send("POST_DELETE"));

export default seriesRouter;
