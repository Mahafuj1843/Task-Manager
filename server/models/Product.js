const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id:{
        type: Number
    },
    title:{
        type: String
    },
    description:{
        type: String
    },
    price:{
        type: Number
    },
    discountPercentage:{
        type: Number
    },
    rating: Number,
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: []
  },{timestamps: true, versionKey: false}
  );

  const Product = mongoose.model("Product", ProductSchema)
  module.exports=Product