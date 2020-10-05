import routes from "../routes";
import Series from "../models/Series";

export const seriesControll = async (req, res) => {
  try {
    const series = await Series.find({}).sort({ _id: -1 });
    res.render("series", { pageTitle: "Series", series });
  } catch (error) {
    console.log(error);
    res.render("series", { pageTitle: "Series", series: [] });
  }
};

export const seriesCreateControll = async (req, res) => {
  if (req.method === "GET") {
    res.render("seriesCreate", { pageTitle: "Series-Create" });
  } else if (req.method === "POST") {
    const {
      body: { series_title, series_description },
    } = req;
    const newSeries = await Series.create({
      title: series_title,
      description: series_description,
    });
    res.redirect(routes.seriesDetail(newSeries._id));
  }
};

export const seriesDetailControll = async (req, res) => {
  const {
    params: { seriesId },
  } = req;
  try {
    const series = await Series.findById(seriesId);
    res.render("seriesDetail", { pageTitle: "Series-Detail", series });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const seriesEditControll = async (req, res) => {
  const {
    params: { seriesId },
  } = req;
  if (req.method === "GET") {
    try {
      const series = await Series.findById(seriesId);
      res.render("seriesEdit", { pageTitle: "Series-Edit", series });
    } catch (error) {
      console.log(error);
      res.redirect(routes.series + routes.seriesDetail(seriesId));
    }
  } else if (req.method === "POST") {
    const {
      body: { series_title, series_description },
    } = req;
    try {
      await Series.findOneAndUpdate(
        { _id: seriesId },
        { title: series_title, description: series_description }
      );
      res.redirect(`/series/${routes.seriesDetail(seriesId)}`);
    } catch (error) {
      console.log(error);
      res.redirect(routes.series + routes.seriesDetail(seriesId));
    }
  }
};

export const seriesDeleteControll = async (req, res) => {
  const {
    params: { seriesId },
  } = req;
  try {
    await Series.findOneAndDelete({ _id: seriesId });
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.series);
};

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
