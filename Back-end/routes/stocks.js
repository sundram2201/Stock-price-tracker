const Router = require("express").Router();
const { createStock, getStocks, getStockById } = require("../controllers/member");

Router.route("/create-stock").post(createStock);
Router.route("/stocks-list").get(getStocks);
Router.route("/stockById").get(getStockById);

module.exports = Router;
