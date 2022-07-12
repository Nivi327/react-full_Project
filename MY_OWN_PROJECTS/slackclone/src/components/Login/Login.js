import Card from "../../UI/Card/Card";

import classes from './Login.module.css';

const Login = props => {
    return <Card>
        <div className={classes.login}>
            <h1>Login to Web App</h1>
            <form>
                <p><input type="text" name="login" placeholder="Username or Email" /></p>
                <p><input type="password" name="password" placeholder="Password" /></p>
                <p className={classes['remember_me']}>
                    <label>
                        <input type="checkbox" name="remember_me" id="remember_me" />
                        Remember me
                    </label>
                </p>
                <p className={classes.submit}><input type="submit" name="commit" value="Login" /></p>
            </form>
        </div >

        <div className={classes['login-help']}>
            <p>Forgot your password? <a href="#">Click here to reset it</a>.</p>
        </div>
    </Card >
}

export default Login;