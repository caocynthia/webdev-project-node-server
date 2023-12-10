import model from "./model.js";

export const findAllReviews = () => model.find();
export const createUserReviewsMovie = (userId, movieId, review) => model.create({user: userId, movieId: movieId, review: review});
export const findMoviesUserReviews = (userId) => model.find({user: userId});
export const findUsersWhoReviewsMovie = (movieId) => model.find({movieId:movieId});