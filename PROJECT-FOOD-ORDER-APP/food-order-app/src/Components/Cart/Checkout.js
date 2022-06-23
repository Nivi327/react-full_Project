import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.length === 6;

const Checkout = props => {

    const [fromInputIsValidity, setFormInputIsValidity] = useState({
        name: true,
        postalcode: true,
        street: true,
        city: true
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityIpnutRef = useRef();

    const fromSubmitHandler = (event) => {
        event.preventDefault();

        const name = nameInputRef.current.value;
        const street = streetInputRef.current.value;
        const postalcode = postalCodeInputRef.current.value;
        const city = cityIpnutRef.current.value;

        const nameIsValid = !isEmpty(name);
        const streetIsValid = !isEmpty(street);
        const postalCodeIsValid = isFiveChars(postalcode);
        const cityIsValid = !isEmpty(city);

        setFormInputIsValidity({
            name: nameIsValid,
            street: streetIsValid,
            postalcode: postalCodeIsValid,
            city: cityIsValid,
        })

        console.log(fromInputIsValidity);

        const formIsValid = nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid;

        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name,
            street,
            postalcode,
            city
        })
    };

    return <form className={classes.form} onSubmit={fromSubmitHandler}>
        <div className={`${classes.control} ${!fromInputIsValidity.name ? classes.invalid : ''}`}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" ref={nameInputRef} />
            {!fromInputIsValidity.name && <p className={classes.error}>Please Enter a Valid Name!!</p>}
        </div>
        <div className={`${classes.control} ${!fromInputIsValidity.street ? classes.invalid : ''}`}>
            <label htmlFor="street">Street</label>
            <input type="text" id="street" ref={streetInputRef} />
            {!fromInputIsValidity.street && <p className={classes.error}>Please Enter a Valid Street Name!!</p>}
        </div>
        <div className={`${classes.control} ${!fromInputIsValidity.postalcode ? classes.invalid : ''}`}>
            <label htmlFor="postalcode">Postal Code</label>
            <input type="text" id="postalcode" ref={postalCodeInputRef} />
            {!fromInputIsValidity.postalcode && <p className={classes.error}>Please Enter a Valid Postal Code( 6 digit numbers )!!</p>}
        </div>
        <div className={`${classes.control} ${!fromInputIsValidity.city ? classes.invalid : ''}`}>
            <label htmlFor="city">City</label>
            <input type="text" id="city" ref={cityIpnutRef} />
            {!fromInputIsValidity.city && <p className={classes.error}>Please Enter a Valid City Name!!</p>}
        </div>
        <div className={classes.actions}>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type='submit' className={classes.submit}>Confirm</button>
        </div>
    </form>
};

export default Checkout;