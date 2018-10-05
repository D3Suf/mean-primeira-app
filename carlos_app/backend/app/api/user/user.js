const resftul = require("node-restful");
const mongoose = resftul.mongoose;

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, min: 6, max: 12, require: true }
});

module.exports = resftul.module("User", userSchema);
