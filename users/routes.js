import * as dao from "./dao.js";

function UserRoutes(app) {
  const createUser = async (req, res) => {
    const user = await dao.createUser(req.body);
    res.json(user);
  };

  const deleteUser = async (req, res) => {
    const status = await dao.deleteUser(req.params.userId);
    res.json(status);
  };
  const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers();
    res.json(users);
  };

  const updateUser = async (req, res) => {
    const { userId } = req.params;
    const status = await dao.updateUser(userId, req.body);
    const currentUser = await dao.findUserById(userId);
    req.session["currentUser"] = currentUser;
    res.json(status);
  };

  const signup = async (req, res) => {
    const user = await dao.findUserByUsername(req.body.username);
    if (user) {
      res.json({ message: "Username already taken" });
    } else {
      const currentUser = await dao.createUser(req.body);
      req.session["currentUser"] = currentUser;
      res.json(currentUser);
    }
  };
  const signin = async (req, res) => {
    const { username, password } = req.body;
    const currentUser = await dao.findUserByCredentials(username, password);
    req.session["currentUser"] = currentUser;
    res.json(currentUser);
  };

  const signout = (req, res) => {
    req.session.destroy();
    res.json(200);
  };

  const account = async (req, res) => {
    res.json(req.session["currentUser"]);
  };

  const findUserById = async (req, res) => {
    const user = await dao.findUserById(req.params.userId);
    res.json(user);
  };

// Like a movie
const likeMovie = async (req, res) => {
  const userId = req.params.userId;
  const movieId = req.params.movieId;

  // Get the current user
  const currentUser = await dao.findUserById(userId);

  // Update likedMovies array
  currentUser.likedMovies.push(movieId);

  // Update the user in the database
  const updatedUser = await updateUser(userId, currentUser);

  // Update the session with the new user data
  req.session["currentUser"] = updatedUser;

  res.json(updatedUser);
};

// Unlike a movie
const unlikeMovie = async (req, res) => {
  const userId = req.params.userId;
  const movieId = req.params.movieId;

  // Get the current user
  const currentUser = await dao.findUserById(userId);

  // Remove the movieId from likedMovies array
  currentUser.likedMovies = currentUser.likedMovies.filter(id => id !== movieId);

  // Update the user in the database
  const updatedUser = await updateUser(userId, currentUser);

  // Update the session with the new user data
  req.session["currentUser"] = updatedUser;

  res.json(updatedUser);
};

  
  app.post('/api/users/:userId/likeMovie/:movieId', likeMovie);
  app.delete('/api/users/:userId/unlikeMovie/:movieId', unlikeMovie);  
  app.post("/api/users", createUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/account", account);
}
export default UserRoutes;
