import routes from "../routes";
import { seriesData } from "../db";

export const seriesControll = (req, res) =>
  res.render("series", { pageTitle: "Series", seriesData });

export const seriesCreateControll = (req, res) =>
  res.render("seriesCreate", { pageTitle: "Series-Create" });

export const seriesDetailControll = (req, res) => {
  res.render("seriesDetail", { pageTitle: "Series-Detail" });
};

export const seriesEditControll = (req, res) =>
  res.render("seriesEdit", { pageTitle: "Series-Edit" });

export const seriesDeleteControll = (req, res) =>
  res.render("seriesDelete", { pageTitle: "Series-Delete" });

export const postWriteControll = (req, res) =>
  res.render("postWrite", { pageTitle: "Post-Write" });

export const postDetailControll = (req, res) =>
  res.render("postDetail", { pageTitle: "Post-Detail" });

export const postEditControll = (req, res) =>
  res.render("postEdit", { pageTitle: "Post-Edit" });

export const postDeleteControll = (req, res) =>
  res.render("postDelete", { pageTitle: "Post-Delete" });

export const searchControll = (req, res) =>
  res.render("search", { pageTitle: "Search" });
