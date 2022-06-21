const express = require("express");
const productRouter = require("./routes/product.routes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use(productRouter); // its like app.use("", roductRouter) or app.use("/", roductRouter)

module.exports = app;
