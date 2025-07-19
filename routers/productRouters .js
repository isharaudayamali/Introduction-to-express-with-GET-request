const express =require('express');
const router = express.Router();
module.exports = router; 

const productController = require('./../controller/productController');

router.get('/', productController.getAllProducts);

router.get('/:id', productController.getProductById);

router.post('/', productController.createNewProduct);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct); 