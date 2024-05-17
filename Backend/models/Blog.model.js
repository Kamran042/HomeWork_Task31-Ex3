const mongoose = require("mongoose");

const Blogs = mongoose.model(
  "Blogs",
  new mongoose.Schema({
    image: {
      type: String,
      required: false,
    },
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    count: {
      type: Number,
    },
    totalPrice: {
      type: Number,
    },
    desc: {
      type: String,
    },
  })
);

module.exports = { Blogs };
