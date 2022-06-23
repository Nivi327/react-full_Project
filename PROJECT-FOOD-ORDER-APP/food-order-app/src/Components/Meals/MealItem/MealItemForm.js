import React, { useRef, useState } from 'react';

import Input from '../../UI/Input';

import classes from './MealItemForm.module.css';

const MealItemForm = props => {

    const [amountIsValid, setamountIsValid] = useState(true);

    const cartRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();


        const enteredAmount = cartRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setamountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);

    }

    return <form className={classes.form} onSubmit={submitHandler}>
        <Input
            ref={cartRef}
            label="Amount"
            input={{
                id: "amount" + props.id,
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: "1"
            }} />
        <button>+ Add</button>
        {!amountIsValid && <p>Please Enter The Valid Amount. (1-5)</p>}
    </form>
};

export default MealItemForm;