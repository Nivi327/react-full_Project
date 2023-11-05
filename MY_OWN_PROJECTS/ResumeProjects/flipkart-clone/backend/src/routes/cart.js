const express = require('express');
const { requireSignIn, userMiddleware } = require('../common-middlewares');
const { addItemToCart } = require('../controller/cart');
const router = express.Router();

router.post('/user/cart/add-item-to-cart', requireSignIn, userMiddleware, addItemToCart);

module.exports = router;