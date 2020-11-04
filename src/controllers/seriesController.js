import routes from "../routes";
import Series from "../models/Series";
import Post from "../models/Post";

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
      file: { location },
    } = req;
    console.log(location);
    const newSeries = await Series.create({
      title: series_title,
      description: series_description,
      innerPosts: [],
      thumbnailUrl: location,
    });
    res.redirect(routes.series + routes.seriesDetail(newSeries._id));
  }
};

export const seriesDetailControll = async (req, res) => {
  const {
    params: { seriesId },
  } = req;
  try {
    const series = await Series.findById(seriesId).populate("innerPosts");
    res.render("seriesDetail", { pageTitle: series.title, series });
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
    const series = await Series.findById(seriesId);
    series.innerPosts.forEach(async (post) => {
      await Post.findOneAndDelete({ _id: post });
    });
    series.remove();
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.series);
};

export const postWriteControll = async (req, res) => {
  if (req.method === "GET") {
    const {
      params: { seriesId },
    } = req;
    try {
      const series = await Series.findById(seriesId);
      res.render("postWrite", { pageTitle: "Post-Write", series });
    } catch (error) {
      console.log(error);
      res.redirect(routes.series);
    }
  } else if (req.method === "POST") {
    const {
      body: { post_title, post_content },
      params: { seriesId },
    } = req;
    const newPost = await Post.create({
      title: post_title,
      content: post_content,
    });
    const fatherSeries = await Series.findById(seriesId);
    fatherSeries.innerPosts.push(newPost);
    fatherSeries.save();
    console.log(newPost);
    console.log(fatherSeries);
    res.redirect(routes.series + routes.postDetail(seriesId, newPost.id));
  }
};

export const postDetailControll = async (req, res) => {
  const {
    params: { seriesId, postId },
  } = req;
  const series = await Series.findById(seriesId);
  const post = await Post.findById(postId);
  res.render("postDetail", { pageTitle: series.title, series, post });
};

export const postEditControll = async (req, res) => {
  if (req.method === "GET") {
    const {
      params: { seriesId, postId },
    } = req;
    const series = await Series.findById(seriesId);
    const post = await Post.findById(postId);
    res.render("postEdit", { pageTitle: "Post-Edit", series, post });
  } else if (req.method === "POST") {
    const {
      body: { post_title, post_content },
      params: { seriesId, postId },
    } = req;
    try {
      await Post.findOneAndUpdate(
        { _id: postId },
        {
          title: post_title,
          content: post_content,
        }
      );
    } catch (error) {
      console.log(error);
    } finally {
      res.redirect(routes.series + routes.postDetail(seriesId, postId));
    }
  }
};

export const postDeleteControll = async (req, res) => {
  const {
    params: { seriesId, postId },
  } = req;
  try {
    const series = await Series.findById(seriesId);
    const filteredInnerPosts = series.innerPosts.filter((post) => {
      return JSON.stringify(post).split(`"`)[1] !== postId;
    });
    series.innerPosts = filteredInnerPosts;
    series.save();
    const post = await Post.findById(postId);
    post.remove();
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.series + routes.seriesDetail(seriesId));
};

export const searchControll = async (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  let series = [];
  try {
    series = await Series.find({
      title: { $regex: searchingBy, $options: "i" },
    });
  } catch (error) {
    console.log(error);
  }
  res.render("search", { pageTitle: "Search", searchingBy, series });
};
