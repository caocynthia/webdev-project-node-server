import express from "express";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import session from "express-session";
import cors from "cors";
import ReviewsRoutes from "./reviews/routes.js";
mongoose.connect("mongodb://127.0.0.1:27017/MyMovieList");

const app = express();

app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL }));

const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/MyMovieList";
mongoose.connect(CONNECTION_STRING);
app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL }));

const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};

if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}

app.use(session(sessionOptions));

app.use(express.json());

ReviewsRoutes(app);

UserRoutes(app);

app.listen(4000);
