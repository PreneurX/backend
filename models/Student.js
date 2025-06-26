const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  dob: Date,
  school: String,
  classLevel: String,
  profilePic: {
    type: String,
    default: "https://res.cloudinary.com/ditugbycj/image/upload/v1750692214/profile_pics/znmauncvzqmpfsloqta3.jpg" // or your default image URL
  }
});


module.exports = mongoose.model("Student", studentSchema);
