const Product = require("../models/Product");
//add a product
const addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();

    res.status(201).json({
      message: "Product added",
      productId: product._id
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//update metadata of a product
const updateMetadata = async (req, res) => {
  try {
    const { productId, metadata } = req.body;

    const product = await Product.findByIdAndUpdate(
      productId,
      { metadata: metadata },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({
      message: "Metadata updated",
      product
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//search products with ranking
const searchProducts = async (req, res) => {
  try {
    const query = req.query.query;

    const products = await Product.find({
      title: { $regex: query, $options: "i" }
    });

    // ranking logic
    const ranked = products.sort((a, b) => {
      const scoreA = (a.rating * 20) + a.sales + a.stock - a.price/1000;
      const scoreB = (b.rating * 20) + b.sales + b.stock - b.price/1000;
      return scoreB - scoreA;
    });

    res.json({ data: ranked });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = { addProduct, updateMetadata, searchProducts };

