import React, { useContext, useState } from 'react';
import WeatherContext from '../store/weather-context';

import classes from './Input.module.css';

const Input = props => {
    const weatherCtx = useContext(WeatherContext);
    const [city, setCity] = useState('');
    const changeCity = (e) => {
        setCity(e.target.value);
    }
    const updateCity = (e) => {
        if(e.key === 'Enter'){
            console.log('pressed enter');
            weatherCtx.changeCity(city);
        }
    }
    return <React.Fragment>
        <div className={classes.input}>
            <input type={props.type} placeholder={props.placeholder} id={props.id} className={classes.search} onChange={changeCity} onKeyDown={updateCity}/>
        </div>
    </React.Fragment>
};

export default Input;