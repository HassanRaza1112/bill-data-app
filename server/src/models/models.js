// @/models.js
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  dateAdded: {
    type: Date,
    required: true,
  },
  dateEdited: {
    type: Date,
    required: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = { Product };
