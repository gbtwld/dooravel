import mongoose, { Schema } from "mongoose";

const SeriesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Title is required!",
  },
  description: {
    type: String,
    required: "Description is required!",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: String,
  },
  thumbnailUrl: {
    type: String,
  },
  innerPosts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const model = mongoose.model("Series", SeriesSchema);
export default model;
