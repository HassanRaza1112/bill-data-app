const express = require("express");
const mongoose = require("mongoose");
const Product = require("./src/routes/product");
const app = express();
const port = 3000;
function connectDB() {
  const url = "mongodb://mongo:27017/bill-data";
  try {
    mongoose.connect(url, {
      autoIndex: true,
    });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
  const dbConnection = mongoose.connection;
  dbConnection.once("open", (_) => {
    console.log("DB CONNECTED!!");
  });
  dbConnection.on("error", (err) => {
    console.error(`connection error: ${err}`);
  });
  return;
}
connectDB();
app.use(Product);
app.get("/get-data", (req, res) => {
  fetch();
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
