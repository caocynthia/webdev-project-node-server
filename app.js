import express from 'express'
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import cors from "cors";

mongoose.connect("mongodb://127.0.0.1:27017/MyMovieList");

const app = express();
app.use(cors());
app.use(express.json())
UserRoutes(app);

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(4000);
