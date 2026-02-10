const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    rating: Number,
    price: Number,
    mrp: Number,
    stock: Number,
    sales: Number,
    metadata: Object
},{timestamps:true});

module.exports = mongoose.model("Product", productSchema);
