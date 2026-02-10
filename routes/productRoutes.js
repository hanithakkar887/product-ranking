const express = require("express");
const router = express.Router();
// const { addProduct, updateMetadata } = require("../controllers/productController");
const { addProduct, updateMetadata, searchProducts } = require("../controllers/productController");

router.post("/product", addProduct);
router.put("/product/meta-data", updateMetadata);
router.get("/search/product", searchProducts);
module.exports = router;


//add a product
// POST http://localhost:5000/api/v1/product
//body
// {
// "title":"iPhone 13",
// "description":"Apple iPhone 13 128GB",
// "rating":4.5,
// "price":50000,
// "mrp":60000,
// "stock":20,
// "sales":200
// }


// Update Metadata API
//put  http://localhost:5000/api/v1/product/meta-data

// {
// "productId":"698b4b17a827056ac9c95790",
// "metadata":{
// "ram":"8GB",
// "storage":"128GB",
// "color":"red",
// "screen":"6.1 inch"
// }
// }



// Search + Ranking API
// GET http://localhost:5000/api/v1/search/product?query=iphone
