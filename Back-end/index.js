const express = require("express");
const app = express();

const cors = require("cors");
const cookieParser = require("cookie-parser");
const stockRoute = require("./routes/stocks");
const port = 3001;
require("./db");

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", function (req, res) {
  res.json("Welcome to Portal....");
});

app.use("/api/stocks", stockRoute);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
