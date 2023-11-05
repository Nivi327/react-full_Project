const Cart = require('../model/cart');

exports.addItemToCart = (req, res) => {

    Cart.findOne({user: req.user._id}).then((cart) => {
        if(cart) {
            const product = req.body.cartItems.product;
            const item = cart.cartItems.find(c => c.product == product);
            let condition, update;
            if(item) {
                condition = {user: req.user._id, "cartItems.product": product}
                update =  {
                    "$set": {
                        "cartItems.$": {
                            ...req.body.cartItems,
                            quantity: item.quantity + req.body.cartItems.quantity
                        }
                    }
                }
            } else {
                condition = {user:req.user._id} 
                update = {
                    "$push": {
                        "cartItems": req.body.cartItems
                    }
                }
            }
            Cart.findOneAndUpdate({user: req.user._id, "cartItems.product": product}, {
                "$set": {
                    "cartItems.$": {
                        ...req.body.cartItems,
                        quantity: item.quantity + req.body.cartItems.quantity
                    }
                }
            }).then(_cart => res.status(201).json({cart: _cart}))
            .catch(_err => res.status(400).json({error: _err}));
        } else {
            const cart = new Cart({
                user: req.user._id,
                cartItems: req.body.cartItems
            });
        
            cart.save().then((cart) => {
                return res.status(201).json({cart});
            }).catch(err => res.status(400).json({err}));
        }
    }).catch(err => res.status(400).json({err}));
}