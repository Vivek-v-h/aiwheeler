import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  userId: { type: String, required: true },
}, {
  timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

export default Post;
