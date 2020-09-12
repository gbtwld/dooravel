import routes from "../routes";

export const seriesControll = (req, res) => res.send("SERIES");
export const seriesCreateControll = (req, res) => res.send("SERIES_CREATE");
export const seriesDetailControll = (req, res) => res.send("SERIES_DETAIL");
export const seriesEditControll = (req, res) => res.send("SERIES_EDIT");
export const seriesDeleteControll = (req, res) => res.send("SERIES_DELETE");
export const postWriteControll = (req, res) => res.send("POST_WRITE");
export const postEditControll = (req, res) => res.send("POST_EDIT");
export const postDeleteControll = (req, res) => res.send("POST_DELETE");
export const searchControll = (req, res) => res.send("SEARCH");
