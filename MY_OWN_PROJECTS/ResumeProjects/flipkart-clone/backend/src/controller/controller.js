const Category = require('./../model/catergory');
const slugify = require('slugify');

exports.createCategory = (req, res) => {
    const categoryObj = {
        name: req.body.name,
        slug: slugify(req.body.name)
    }

    if (req.body.parentId) {
        categoryObj.parentId = req.body.parentId
    }

    const cat = new Category(categoryObj);
    cat.save().then((category) => {
        if (category) {
            return res.status(201).json({ category });
        }
    }).catch((err) => {
        return res.status(400).json({err});
    });
};