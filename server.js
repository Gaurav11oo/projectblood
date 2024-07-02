const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
// const http = require('http');
// const app = require('../PROJECT BLOOD BANK/client/src/App');

const path = require("path");

//dot config
dotenv.config();

//mongodb connection
connectDB();

//mongodb
const mongoURI = "mongodb+srv://project12024:project2024@cluster1.qnt3tf5.mongodb.net/";

try {
  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => {
      console.error("Could not connect to MongoDB:", err)
      process.exit(1)
    });

} catch (err) {
  console.log("Error : " + err.message)
}


//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "./client/build")));

//routes
// 1 test route
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

//static Folder ==> ./client/build

// statis routes ==> '/client/build/index.html'

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const PORT = process.env.PORT || 5000;
//listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
      .bgBlue.white
  );
});
