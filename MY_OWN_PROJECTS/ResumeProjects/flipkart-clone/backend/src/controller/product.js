const Prodcut = require('../model/product');
const slugify = require('slugify');


exports.createProduct = (req, res) => {
    const {name, price, description, category, quantity} = req.body;

    let productPictures = [];

    if(req.files && req.files.length > 0) {
        productPictures = req.files.map((file) => {
            return {
                img: file.filename
            }
        })
    };

    const product = new Prodcut({
        name,
        slug: slugify(name),
        price,
        quantity,
        description,
        productPictures,
        category,
        createdBy: req.user._id
    });

    product.save().then((prod) => {
        return res.status(201).json({
            product: prod
        })
    }).catch((err) => {
        return res.status(400).json({
            error: err
        })
    });
}