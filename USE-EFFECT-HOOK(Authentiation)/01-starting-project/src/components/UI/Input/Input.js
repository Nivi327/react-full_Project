import React from 'react';

const Input = (props) => {
    return (
        <div
          className={props.className}
        >
          <label htmlFor={props.for || 'text'}>{props.labelName}</label>
          <input
            type={props.type || 'text'}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
          />
        </div>
    )
};


export default Input;
