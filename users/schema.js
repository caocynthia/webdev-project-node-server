import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    email: String,
    lastName: String,
    dob: Date,
    role: {
      type: String,
      enum: ["MODERATOR", "USER"],
      default: "USER",
    },
    likedMovies: [String],
  },
  { collection: "users" }
);
export default userSchema;
