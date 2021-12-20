const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

const folder = path.resolve();
app.use("/uploads", express.static(path.join(folder, "/uploads")));

if ((process.env.NODE_ENV = "production")) {
  app.use(express.static(path.join(__dirname, "./build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
