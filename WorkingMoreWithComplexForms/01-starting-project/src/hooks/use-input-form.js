import { useState } from 'react';

const useInputForm = (validateInput) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [inputTouched, setInputTouched] = useState(false);


    const inputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
        if (validateInput(event.target.value)) {
            setIsValid(true);
        }
    }

    const onBlurInputHandler = (event) => {
        setInputTouched(true);
        if (!validateInput(enteredValue)) {
            setIsValid(false);
        }
    }

    const inputValueIsValid = !isValid && inputTouched;
    const inputClasses = inputValueIsValid ? 'form-control invalid' : 'form-control'

    return {
        value: enteredValue,
        isValid,
        inputChangeHandler,
        onBlurInputHandler,
        inputValueIsValid,
        inputClasses
    }
};

export default useInputForm;