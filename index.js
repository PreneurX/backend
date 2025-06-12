const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require("./routes/auth");

require('dotenv').config();

const app = express();
const adminRoutes = require("./routes/admin");
app.use("/api/admin", adminRoutes);



// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);


// Example route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Connect to DB and start server
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server started on port", process.env.PORT || 5000);
    });
  })
  .catch(err => console.error("DB connection failed:", err));
