import React from 'react';

import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';

import Img from './../../assets/images/meals.jpg';

const Header = (props) => {
    return <React.Fragment>
        <header className={classes.header}>
            <h2>React Meals</h2>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={Img} alt="A Table full of Delicios Meals!" />
        </div>
    </React.Fragment>
}

export default Header;