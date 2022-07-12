import { createContext, useState } from "react";

const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }
});

export const AuthContextProvider = props => {
    const initialToken = localStorage.getItem('token');

    const [token, setToken] = useState(initialToken);

    const isLoggedIn = !!token;

    let logoutTimer;

    const calculateRemainingDuration = (expitationTime) => {
        const currentTime = new Date().getTime();
        const durationTime = new Date(expitationTime).getTime();

        return durationTime - currentTime;
    }

    const logOutHandler = () => {
        localStorage.removeItem('token');
        setToken(null);

        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }

    const logInHandler = (tkn, expirationTime) => {
        localStorage.setItem('token', tkn);
        setToken(tkn);

        const remainingTime = calculateRemainingDuration(expirationTime);

        logoutTimer = setTimeout(logOutHandler, remainingTime);
    }

    const contextValue = {
        token,
        isLoggedIn,
        login: logInHandler,
        logout: logOutHandler
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthContext;
