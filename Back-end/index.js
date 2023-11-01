const express = require("express");

const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });
console.log(process.env.PORT, ":>?>");

const app = express();

const cors = require("cors");
const cookieParser = require("cookie-parser");
const stockRoute = require("./routes/stocks");
const port = process.env.PORT || 5502;
const db = require("./db");
(async () => {
  await db();
})();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", function (req, res) {
  res.send("Welcome to Portal....");
});

app.use("/api/stocks", stockRoute);

const listen = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
