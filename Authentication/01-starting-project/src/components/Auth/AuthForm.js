import { useState, useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import { useHistory } from 'react-router-dom';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");


  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (!enteredEmail.trim().includes('@') || enteredPassword.trim().length < 6) {
      console.log('Invalid email or password');
      return;
    }

    let url;

    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCC44sV_1JTA4KcJNICqoyXKvOUlInHaqQ'
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCC44sV_1JTA4KcJNICqoyXKvOUlInHaqQ'
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          res.json().then(data => {
            let errorOccoured = 'Authentication Failed!';
            if (data && data.error && data.error.message) {
              errorOccoured = data.error.message;
            }
            setError(errorOccoured);
          })
        }
      }
      )
      .then(data => {
        const expirationTime = new Date(new Date().getTime() + (+(data.expiresIn * 1000)));
        authCtx.login(data.idToken, expirationTime);
        history.replace('/');
      })
      .catch(error => {
        console.log(error.message);
        setError(error.message);
      })
    setIsLoading(false);
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div style={{ color: 'white' }}>{error !== "" ? error : ''}</div>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          <button>{isLoading ? 'Loading...' : isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
