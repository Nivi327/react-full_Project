import React, { useContext, useState } from 'react';

import CartContext from '../../Store/cart-context';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import Checkout from './Checkout';

import classes from './Cart.module.css';

const Cart = props => {

    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmitted, setDidSubmitted] = useState(false);

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalPrice.toFixed(2)}`;

    const hasItems = cartCtx.items.length > 0

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 })
    };

    const onSubmitHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch('https://food-order-app-e3266-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        });
        setIsSubmitting(false);
        setDidSubmitted(true);
        cartCtx.clearItems();
    }

    const cartItems = <ul className={classes['cart-items']}>{
        cartCtx.items.map(item => {
            return <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
            />
        })}</ul>

    const checkoutHandler = () => {
        setIsCheckout(true);
    }

    const cartButtons = (
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
            {hasItems && <button className={classes.button} onClick={checkoutHandler}>Order</button>}
        </div>
    )

    let cartModelContent = <React.Fragment>
        {cartItems}
        <div className={classes.total}>
            <span>Total Price </span>
            <span>{totalAmount}</span>
        </div>
        {isCheckout && <Checkout onConfirm={onSubmitHandler} onCancel={props.onHideCart} />}
        {!isCheckout && cartButtons}
    </React.Fragment>

    if (isSubmitting) {
        cartModelContent = <p>Sending the order...</p>
    }

    if (didSubmitted) {
        cartModelContent = <React.Fragment>
            <p>Order Sent Successfully..</p>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
            </div>
        </React.Fragment>
    }

    return <Modal onClick={props.onHideCart}>
        {cartModelContent}
    </Modal>
};

export default Cart;