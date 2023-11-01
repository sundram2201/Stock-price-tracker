const mongoose = require("mongoose");

const DB_URL = process.env.DB_URL;

const connectDB = () => {
  mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("connected to mongodb.....");
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};

module.exports = connectDB;
