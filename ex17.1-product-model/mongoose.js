import mongoose from "mongoose";
import validator from "validator";

mongoose.connect("mongodb://localhost:27017/product-api", { useNewUrlParser: true });
//! note to myself: got some depracated warning. in other file the same code works fine!, I think the problem is the version of mongoose installed in the first time
const Product = mongoose.model("Product", {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
  },
  details: {
    description: {
      type: String,
      required: true,
      minlength: 10,
    },
    price: {
      type: Number,
      validate(value) {
        if (value <= 0) {
          throw new Error("Price must be a positive number!");
        }
      },
    },
    discount: {
      type: Number,
      default: 0,
    },
    images: {
      type: Array,
      minlength: 2,
    },
    phone: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isMobilePhone(value, "he-IL")) {
          throw new Error("Phone is not valid!");
        }
      },
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
});

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

const product = new Product({
  name: "pooh the3 ",
  category: "children toys",
  details: {
    description: "disney's toys",
    price: 50,
    discount: 10,
    images: ["img1.jpg", " img2.jpg"],
    phone: "+972524555527",
  },
});

product
  .save()
  .then(() => {
    console.log(product);
  })
  .catch((error) => {
    console.log(error);
  });
