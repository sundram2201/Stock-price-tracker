const mongoose = require("mongoose");

const stockSchema = mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  initial_price: {
    type: Number,
    required: true,
  },
  price_2022: {
    type: Number,
    required: true,
  },
  current_price: {
    type: Number,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("stock", stockSchema);
