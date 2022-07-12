import useInputForm from "../hooks/use-input-form";
import { useState, useEffect } from "react";

const BasicForm = (props) => {

  const [formIsValid, setFormIsValid] = useState(false);

  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    inputChangeHandler: firstNameChangeHandler,
    onBlurInputHandler: onBlurFirstNameInputHandler,
    inputValueIsValid: firstNameValueIsValid,
    inputClasses: firstNameInputClasses
  } = useInputForm(value => value.trim() !== '');


  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    inputChangeHandler: lastNameChangeHandler,
    onBlurInputHandler: onBlurLastNameInputHandler,
    inputValueIsValid: lastNameValueIsValid,
    inputClasses: lastNameInputClasses
  } = useInputForm(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    inputChangeHandler: EmailChangeHandler,
    onBlurInputHandler: onBlurEmailInputHandler,
    inputValueIsValid: emailValueIsValid,
    inputClasses: emailInputClasses
  } = useInputForm(value => value.trim().includes('@'));


  useEffect(() => {
    if (enteredFirstName.trim() !== '' && enteredLastName.trim() !== '' && enteredEmail.trim().includes('@')) {
      setFormIsValid(true);
    }
    else {
      setFormIsValid(false);
    }
  }, [enteredFirstName, enteredLastName, enteredEmail]);

  return (
    <form>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={onBlurFirstNameInputHandler} />
          {firstNameValueIsValid && <p className="error-text">First Name cannot be empty.</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={onBlurLastNameInputHandler}
          />
          {lastNameValueIsValid && <p className="error-text">Last Name cannot be empty.</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='email'
          id='name'
          value={enteredEmail}
          onChange={EmailChangeHandler}
          onBlur={onBlurEmailInputHandler}
        />
        {emailValueIsValid && <p className="error-text">Email Should Contain @.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
