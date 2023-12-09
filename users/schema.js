// import mongoose from "mongoose";

// const schema = new mongoose.Schema( {
//     // _id: String,
//     username: {type: String, required: true, unique: true},
//     password: {type: String, required: true},
//     email: String,
//     role: {type: String, default: "ANANONYMOUS", enum:["ANANONYMOUS", "USER", "MODERATOR"]},
//     firstName: String,
//     lastName: String,
//     dob: Date,
// }, {collection: "users"});

// export default schema;

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
  },
  { collection: "users" }
);
export default userSchema;
