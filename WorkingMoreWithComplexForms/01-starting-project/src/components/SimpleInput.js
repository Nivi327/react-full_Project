import { useEffect, useState } from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    enteredInputHandler: enteredNameInputHandler,
    onBlurInputHandler: onBlurNameInputHandler,
    inputIsValid: nameInputIsValid,
    validClasses: nameIsValidClasses,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');


  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    enteredInputHandler: enteredEmailInputHandler,
    onBlurInputHandler: onBlurEmailHandler,
    inputIsValid: emailInputIsValid,
    validClasses: emailInputIsValidClasses,
    reset: resetEmailInput
  } = useInput(value => value.trim().includes('@'));


  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid && enteredEmailIsValid) {
      setFormIsValid(true);
    }
  }, [enteredNameIsValid, enteredEmailIsValid])

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }
    if (!enteredEmailIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameIsValidClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          value={enteredName}
          type='text'
          id='name'
          onBlur={onBlurNameInputHandler}
          onChange={enteredNameInputHandler}
        />
        {nameInputIsValid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className={emailInputIsValidClasses}>
        <label htmlFor='name'>Your Email</label>
        <input
          value={enteredEmail}
          type='email'
          id='email'
          onBlur={onBlurEmailHandler}
          onChange={enteredEmailInputHandler}
        />
        {emailInputIsValid && <p className='error-text'>Email must include @</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
