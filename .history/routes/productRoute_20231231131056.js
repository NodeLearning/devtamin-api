const express = require("express");
const Product = require("../models/productModel");
const {getAllProducts, getProductById, createProduct } = require('../controller/productController');

const router = express.Router();

router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.post("/",createProduct );

//update product
router.put("/:id", );

// delete product
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
