import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';


const emailReducer = (prevState, action)=> {
  if(action.type === 'INPUT_STATE'){
    return {value: action.val, isValid:action.val.includes('@')};
  }
  else if(action.type === 'INPUT_CHECK'){
    return {value: prevState.value, isValid:prevState.value.includes("@")};
  }
  return {value: '', isValid: false};
}

const passwordReducer = (prevState, action) => {
  if(action.type === 'PASSWORD_STATE'){
    return {value: action.val, isValid: action.val.length > 6};
  }
  else if(action.type === 'PASSWORD_CHECK'){
    return {value: prevState.value, isValid: prevState.value.length > 6};
  }
  return {value: '', isValid: false};
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);


  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '', 
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const {isValid: emailIsValid } = emailState;
  const {isValid: passwordIsValid } = passwordState;

  useEffect(()=>{
    const timer = setTimeout(
      () => {
        console.log("Form validation");
        setFormIsValid(
          emailIsValid && passwordIsValid
        );
      }, 
      500
    )
    return () => {
      console.log("CLEAN UP")
      clearTimeout(timer);
    }
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'INPUT_STATE', val: event.target.value});

    // setFormIsValid(
    //   passwordState.isValid && event.target.value.includes('@')
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:'PASSWORD_STATE',  val: event.target.value});

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && emailState.isValid
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_CHECK'})
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'PASSWORD_CHECK'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input 
          id="email"
          type="email" 
          for="email" 
          value={emailState.value} 
          labelName={"Email"}
          className={
            `${classes.control} ${
              emailState.isValid === false ? classes.invalid : ''
            }`} 
          onChange ={emailChangeHandler} 
          onBlur = {validateEmailHandler}
        />
        <Input
          id="password"
          type="password" 
          for="password" 
          value={passwordState.value} 
          labelName={"Password"}
          className={
            `${classes.control} ${
              passwordState.isValid === false ? classes.invalid : ''
            }`} 
          onChange ={passwordChangeHandler} 
          onBlur = {validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
