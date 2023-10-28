const mongoose = require("mongoose");

const DB_URL = "mongodb://localhost:27017/local";

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("connected to mongodb.....");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
