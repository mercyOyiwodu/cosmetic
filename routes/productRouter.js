const router = require('express').Router(); 
const { createProduct } = require('../controller/productController');

router.post('/product', createProduct);

module.exports = router;
