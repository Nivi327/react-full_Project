const express = require('express');
const { createCategory } = require('../controller/controller');
const router = express.Router();

router.post('/category/create', createCategory);

module.exports = router;