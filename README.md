# 🛍️ Product Ranking Search API

A backend microservice for an e-commerce platform that supports product storage, metadata updates, and intelligent search with ranking.

Built using Node.js, Express, and MongoDB Atlas.

--------------------------------------------------

## 🚀 Tech Stack
🟢 Node.js  
⚡ Express.js  
🍃 MongoDB Atlas  
🔗 REST APIs  

--------------------------------------------------

## 📌 Base URL
http://localhost:5000/api/v1

--------------------------------------------------

## 🧾 Environment Setup (.env)
Create a `.env` file in root folder and add:

MONGO_URL=your_mongodb_atlas_connection_url  
PORT=5000  

⚠️ Replace with your MongoDB Atlas URL.

Example:
MONGO_URL=mongodb+srv://username:password@cluster0.mongodb.net/productDB  
PORT=5000  

--------------------------------------------------

## 📦 1. Add Product API
POST /api/v1/product

Sample Body:
{
"title":"iPhone 13",
"description":"Apple iPhone 13 128GB",
"rating":4.5,
"price":50000,
"mrp":60000,
"stock":20,
"sales":200
}

--------------------------------------------------

## 🛠️ 2. Update Product Metadata
PUT /api/v1/product/meta-data

Sample Body:
{
"productId":"your_product_id",
"metadata":{
"ram":"8GB",
"storage":"128GB",
"color":"red",
"screen":"6.1 inch"
}
}

--------------------------------------------------

## 🔍 3. Search & Ranking API
GET /api/v1/search/product?query=iphone

Returns ranked products based on:
⭐ Rating  
📈 Sales  
📦 Stock  
💰 Price  

Higher rating & sales → higher rank  
Lower price → better rank  

--------------------------------------------------

## ▶️ Run Project
npm install  
npm start  

Server runs on:
http://localhost:5000

--------------------------------------------------

## 💡 Features
✔ Add products  
✔ Update metadata  
✔ Search products  
✔ Ranking algorithm  
✔ MongoDB Atlas connected  

--------------------------------------------------

👩‍💻 Author: Hani Thakkar 🚀
