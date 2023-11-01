const stocksCollection = require("../models/stocks");

exports.createStock = async (req, res) => {
  const data = new stocksCollection(req.body);
  data.save();
  return res.status(201).send({ message: "data Inserted successfully", data });
};

exports.getStocks = async (req, res) => {
  await stocksCollection
    .find({})
    .then((data) => {
      return res.status(200).send({ message: "Data retirved successfully", data: data.reverse() });
    })
    .catch((err) => {
      return err;
    });
};

exports.getStockById = async (req, res) => {
  await stocksCollection
    .findById(req.query.id)
    .then((data) => {
      return res.status(200).send({ message: "Data fetched successfully", data });
    })
    .catch((err) => {
      return res.status(500).json({ error: err.message });
    });
};
