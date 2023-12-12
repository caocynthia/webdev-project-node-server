import model from "./model.js";

export const createReview = (review) => model.create(review);
export const findAllReviews = () => model.find();
export const findReviewById = (reviewId) => model.findById(reviewId);
export const findReviewByUser = (userId) => model.find({ userId: userId });
export const findReviewByMovie = (movieId) => model.find({ movieId: movieId });
export const updateReview = (reviewId, review) =>
  model.updateOne({ _id: reviewId }, { $set: review });
export const deleteReview = (reviewId) => model.deleteOne({ _id: reviewId });
