import React from 'react';
import ReactDom from 'react-dom'

import classes from './Modal.module.css';

const BackDrop = props => {
    return <div className={classes.backdrop} onClick={props.onClick} />
}

const LayOuts = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
}

const portal_div = document.querySelector('#layouts');

const Modal = props => {
    return <React.Fragment>
        {ReactDom.createPortal(<BackDrop onClick={props.onClick} />, portal_div)}
        {ReactDom.createPortal(<LayOuts>{props.children}</LayOuts>, portal_div)}
    </React.Fragment>
};

export default Modal;