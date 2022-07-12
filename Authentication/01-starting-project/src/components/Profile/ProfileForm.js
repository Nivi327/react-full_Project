import { useContext, useRef } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';
import { useHistory } from 'react-router-dom';

const ProfileForm = () => {

  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const history = useHistory();

  const updateHandler = (event) => {
    event.preventDefault();
    const enteredNewPassword = newPasswordInputRef.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCC44sV_1JTA4KcJNICqoyXKvOUlInHaqQ', {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.ok) {
          console.log(res.status);
        } else {
          throw new Error('Password Cannot be updated');
        }
      })
      .then(data => {
        console.log(data);
        history.replace('/');
      })
      .catch(err => console.log(err.message));
  }


  return (
    <form className={classes.form} onSubmit={updateHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
