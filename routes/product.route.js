const express = require('express');

const productRouter = express.Router();

const productController = require('../controllers/product.controller');

productRouter.get('/allproducts', productController.allProducts);
productRouter.get('/product/:id', productController.getProductById);

module.exports = productRouter;