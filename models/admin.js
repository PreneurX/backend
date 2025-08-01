const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true, unique: true },
  dob: { type: Date, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Admin", adminSchema);
