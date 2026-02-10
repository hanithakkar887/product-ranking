const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");const productRoutes = require("./routes/productRoutes");


const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", productRoutes);


connectDB();

app.get("/", (req, res) => {
  res.send("API running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
