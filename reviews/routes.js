import * as dao from "./dao.js";

function ReviewsRoutes(app) {
  const createReview = async (req, res) => {
    const review = await dao.createReview(req.body);
    res.json(review);
  };

  const deleteReview = async (req, res) => {
    const status = await dao.deleteReview(req.params.reviewId);
    res.json(status);
  };
  const findAllReviews = async (req, res) => {
    const reviews = await dao.findAllReviews();
    res.json(reviews);
  };

  const updateReview = async (req, res) => {
    const { reviewId } = req.params;
    const status = await dao.updateReview(reviewId, req.body);
    res.json(status);
  };

  const findReviewById = async (req, res) => {
    const review = await dao.findReviewById(req.params.reviewId);
    res.json(review);
  };

  const findReviewByUser = async (req, res) => {
    const review = await dao.findReviewByUser(req.params.userId);
    res.json(review);
  };

  const findReviewByMovie = async (req, res) => {
    const review = await dao.findReviewByMovie(req.params.movieId);
    res.json(review);
  };

  app.post("/api/reviews", createReview);
  app.get("/api/reviews", findAllReviews);
  app.get("/api/reviews/:reviewId", findReviewById);
  app.get("/api/reviews/user/:userId", findReviewByUser);
  app.get("/api/reviews/movie/:movieId", findReviewByMovie);
  app.delete("/api/reviews/:reviewId", deleteReview);
  app.put("/api/reviews/:reviewId", updateReview);
}
export default ReviewsRoutes;
