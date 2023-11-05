const express = require('express');
const { requireSignIn, adminMiddleware, userMiddleware } = require('../common-middlewares');
const { createProduct } = require('../controller/product');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), 'uploads'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now()
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
})

const upload = multer({ storage: storage })

router.post('/product/create', requireSignIn, adminMiddleware, upload.array('productPicture'), createProduct);


module.exports = router;