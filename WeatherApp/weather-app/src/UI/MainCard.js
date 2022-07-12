import React from 'react';

import classes from './Card.module.css';

const MainCard = props => {
    return <div className={classes['main-card']}>{props.children}</div>
};

export default MainCard;