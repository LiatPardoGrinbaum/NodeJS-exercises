// import { Router } from "express";
const { Router } = require("express");
const productRouter = Router();
const Product = require("../models/product");

//***Ex18.1*******refactor with async\delete***********
//***Ex19.1**below is with then\catch****

//create a product
productRouter.post("/products", async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.status(201).send(product);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

//get all products
productRouter.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

//get specific product by id
productRouter.get("/products/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const product = await Product.findById(_id);
    if (!product) {
      return res.status(404).send();
    }
    res.send(product);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

//get all products that are active
//? If I write /products/isActive it will take isActive like it's the id from above and it won't work. I can take all this block and put it above the route of /products/:id
productRouter.get("/isactive", async (req, res) => {
  try {
    const products = Product.find({ isActive: true });
    if (!products) {
      return res.status(404).send();
    }
    res.send(products);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

//Get products with a specific price range(example min = 50 max = 500)
productRouter.get("/price", (req, res) => {
  try {
    const products = Product.find({ "details.price": { $gte: 50, $lt: 500 } });
    if (!products) {
      return res.status(404).send();
    }
    res.send(products);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

/* 
//create a product
productRouter.post("/products", (req, res) => {
  const product = new Product(req.body);
  product
    .save()
    .then(() => {
      res.status(201).send(product);
    })
    .catch((e) => {
      res.status(400).send(e.message);
    });
});

//get all products
productRouter.get("/products", (req, res) => {
  Product.find({})
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
});

//get specific product by id
productRouter.get("/products/:id", (req, res) => {
  const _id = req.params.id;
  Product.findById(_id)
    .then((product) => {
      if (!product) {
        return res.status(404).send();
      }
      res.send(product);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
});

//get all products that are active
//? If I write /products/isActive it will take isActive like it's the id from above and it won't work. I can take all this block and put it above the route of /products/:id
productRouter.get("/isactive", (req, res) => {
  Product.find({ isActive: true })
    .then((products) => {
      if (!products) {
        return res.status(404).send();
      }
      res.send(products);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
});

//Get products with a specific price range(example min = 50 max = 500)
productRouter.get("/price", (req, res) => {
  Product.find({ "details.price": { $gte: 50, $lt: 500 } })
    .then((users) => {
      if (!users) {
        return res.status(404).send();
      }
      res.send(users);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
});
 */

module.exports = productRouter;
