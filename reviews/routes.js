import * as dao from "./dao.js";

function ReviewsRoutes(app) {
  const findAllReviews = async (req, res) => {
    const reviews = await dao.findAllReviews();
    res.send(reviews);
  };
  const createUserReviewsMovie = async (req, res) => {
    const { userId, movieId, review } = req.params;
    const reviews = await dao.createUserReviewsMovie({
      userId,
      movieId,
      review,
    });
    res.send(reviews);
  };
  const findMoviesUserReviews = async (req, res) => {
    const { userId } = req.params;
    const reviews = await dao.findMoviesUserReviews(userId);
    res.send(reviews);
  };
  const findUsersWhoReviewsMovie = async (req, res) => {
    const { movieId } = req.params;
    const reviews = await dao.findUsersWhoReviewsMovie(movieId);
    res.send(reviews);
  };

  app.get("/api/reviews", findAllReviews);
  app.post("/api/users/:userId/reviews/:movieId", createUserReviewsMovie);
  app.get("/api/users/:userId/reviews", findMoviesUserReviews);
  app.get("/api/movies/:movieId/reviews", findUsersWhoReviewsMovie);
}

export default ReviewsRoutes;