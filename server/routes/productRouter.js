const express = require('express');
const { productList } = require('../controllers/productController');

const router = express.Router()

router.get('/list/:pageNo/:perPage/:searchKey', productList);

module.exports = router