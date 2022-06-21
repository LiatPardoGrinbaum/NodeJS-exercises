const mongoose = require("mongoose");
const validator = require("validator");

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

module.exports = Product;
