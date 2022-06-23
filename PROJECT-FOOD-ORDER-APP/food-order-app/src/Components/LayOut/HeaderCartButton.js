import React, { useContext, useEffect, useState } from 'react';

import CartIcon from './../Cart/CartIcon';
import CartContext from '../../Store/cart-context';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {

    const [isClassBump, setIsClassBump] = useState(false);

    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const NumberOfItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);

    const buttonClass = `${classes.button} ${isClassBump ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length < 1) {
            return;
        }
        setIsClassBump(true);

        const timer = setTimeout(() => {
            setIsClassBump(false);
        }, 300)

        return () => {
            clearTimeout(timer);
        }
    }, [items])

    return <button className={buttonClass} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            {NumberOfItems}
        </span>
    </button>
}

export default HeaderCartButton;