import React, { useContext } from 'react';

import classes from './Area.module.css';

import Card from '../../../../UI/Card';

import WeatherContext from '../../../../store/weather-context';

const Area = props => {

    const weatherCtx = useContext(WeatherContext);

    const location = weatherCtx.location;

    const localtime = location.localtime;

    const time = localtime;

    console.log(weatherCtx.currentWeather);
    const currentCondition = weatherCtx.currentWeather.condition.text;

    return <Card>
        <div className={classes.area}>
            <div className={classes.place}>
                <span>{location.name}, {location.region}</span>
            </div>
            <div className={classes.details}>
                <span>{time}</span>
            </div>
            <div className={classes.details}>
                <span>{currentCondition || "Sunny"}</span>
            </div>
        </div>
    </Card>
};

export default Area;
