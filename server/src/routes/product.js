const { Router } = require("express");
const { Product } = require("../models/models");
const app = Router();

app.get("/products", async (req, res) => {
  const allProducts = await Product.find();
  return res.status(200).json({ products: allProducts });
});
app.post("/products", async (req, res) => {
  const newProduct = new Product({ ...req.body });
  const insertedProduct = await newProduct.save();
  return res.status(201).json(insertedProduct);
});
app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  await Product.updateOne({ id }, req.body);
  const updatedProduct = await Product.findById(id);
  return res.status(200).json(updatedProduct);
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id);
  return res.status(200).json(deletedProduct);
});
module.exports = app;
