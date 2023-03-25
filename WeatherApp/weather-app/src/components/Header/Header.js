import React from 'react';
import Input from '../../UI/Input';

import classes from './Header.module.css';

const Header = props => {
    return <div className={classes.header}>
        <span className={classes.name}>My Weather App</span>
        <Input type="text" id="search" placeholder="search for your place.." name="search"/>
    </div>
};

export default Header;