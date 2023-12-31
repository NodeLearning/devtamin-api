const express = require("express");
const Product = require("../models/productModel");
const {getAllProducts, getProductById, createProduct, updateProduct, deleteProduct} = require('../controller/productController');

const router = express.Router();

router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.post("/",createProduct );

//update product
router.put("/:id", updateProduct );

// delete product
router.delete("/:id", deleteProduct );

module.exports = router;
