import mongoose, { Schema } from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Title is required!",
  },
  content: {
    type: String,
    required: "Content is required!",
  },
});

const model = mongoose.model("Post", PostSchema);
export default model;
