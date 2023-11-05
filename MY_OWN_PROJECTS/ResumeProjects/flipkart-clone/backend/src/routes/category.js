const express = require('express');
const { requireSignIn, adminMiddleware, userMiddleware } = require('../common-middlewares');
const { createCategory, getCategories } = require('../controller/category');
const router = express.Router();

router.post('/category/create', requireSignIn, adminMiddleware, createCategory);
router.get('/category/getCategory', getCategories);


module.exports = router;