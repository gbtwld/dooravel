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
    type: String,
    default: Date.now,
  },
  author: {
    type: String,
  },
});
