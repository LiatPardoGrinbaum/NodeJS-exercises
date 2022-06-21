const mongoose = require("mongoose");
// const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/product");

// const product = new Product({
//   name: "shirt",
//   category: "clothes",
//   isActive: true,
//   details: {
//     description: "A blue shirt size medium for women",
//     price: 50,
//     discount: 10,
//     images: ["img1.jpg", " img2.jpg"],
//     phone: "+972524666668",
//   },
// });

// const product = new Product({
//   name: "pooh the bear22",
//   category: "children toys",
//   details: {
//     description: "disney's toys",
//     price: 50,
//     discount: 10,
//     images: ["img1.jpg", " img2.jpg"],
//     phone: "+972524555527",
//   },
// });

// product
//   .save()
//   .then(() => {
//     console.log(product);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
