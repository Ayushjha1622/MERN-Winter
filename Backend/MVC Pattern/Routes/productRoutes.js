const express = require('express')
const router = express.Router()
const {getProducts, updateProduct} = require('../Controllers/productController')


router.get('/Products', getProducts)

router.put('/products/:id', updateProduct)
module.exports = router