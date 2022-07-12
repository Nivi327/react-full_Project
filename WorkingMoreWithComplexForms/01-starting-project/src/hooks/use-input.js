import { useState } from "react";

const useInput = (validateInput) => {
    const [inputValue, setInputValue] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [inputTouched, setInputTouched] = useState(false);

    const enteredInputHandler = (event) => {
        setInputValue(event.target.value);
        if (validateInput(event.target.value)) {
            setIsValid(true);
        }
    }

    const onBlurInputHandler = event => {
        setInputTouched(true);
        if (!validateInput(inputValue)) {
            setIsValid(false);
        }
    }

    const inputIsValid = !isValid && inputTouched;
    const validClasses = inputIsValid ? 'form-control invalid' : 'form-control';

    const reset = () => {
        inputValue('');
        setInputTouched(false);
    }

    return {
        value: inputValue,
        isValid,
        enteredInputHandler,
        onBlurInputHandler,
        inputIsValid,
        validClasses,
        reset
    }
};

export default useInput;