import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema(
  {
    movieId: { type: String, required: true },
    movieTitle: String,
    userId: { type: String, required: true },
    username: String,
    review: String,
  },
  { collection: "reviews" }
);
export default reviewSchema;
