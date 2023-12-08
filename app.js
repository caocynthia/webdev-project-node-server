import express from "express";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import session from "express-session";
import cors from "cors";

mongoose.connect("mongodb://127.0.0.1:27017/MyMovieList");

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

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

UserRoutes(app);

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(4000);
