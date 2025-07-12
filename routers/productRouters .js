const express =require('express');
const router = express.Router();
module.exports = router; 

const productController = require('./../controller/productController');

router.get('/products', productController.getAllProducts);

router.get('/products/:id', productController.getProductById);

router.post('/products', productController.createNewProduct);

router.put('/products/:id', productController.updateProduct);

router.delete('/products/:id', productController.deleteProduct); 