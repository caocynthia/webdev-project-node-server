import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema(
  {
    movieId: { type: String, required: true },
    userId: { type: String, required: true },
    review: String,
  },
  { collection: "reviews" }
);
export default reviewSchema;
