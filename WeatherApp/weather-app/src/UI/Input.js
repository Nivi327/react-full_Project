import React from 'react';

import classes from './Input.module.css';

const Input = props => {
    return <React.Fragment>
        <div className={classes.input}>
            <input type={props.type} placeholder={props.placeholder} id={props.id} className={classes.search} />
        </div>
    </React.Fragment>
};

export default Input;