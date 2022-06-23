import React, { useContext } from 'react';

import sunny from './../../../../assets/fully_sunny.jfif';
import partly_cloudy from './../../../../assets/partly_cloudy.png';
import rain_cloudy from './../../../../assets/rain_cloudy.png';

import Card from './../../../../UI/Card';
import img_classes from './../AllDays/AllDays.module.css';
import WeatherContext from '../../../../store/weather-context';

import classes from './CurrentHour.module.css';
import area_classes from '../Area/Area.module.css';


const CurrentHour = props => {

    const weatherCtx = useContext(WeatherContext);

    const currentWeather = weatherCtx.currentWeather;

    const precipitation = currentWeather.precip_mm;

    const location = weatherCtx.location;

    const time = location.localtime;

    const currentCondition = currentWeather.weatherCondition;

    const todaySkyCondition = () => {
        if (currentWeather.weatherCondition.includes("rain")) {
            return "rainy"
        } else if (currentWeather.weatherCondition.includes("sun")) {
            return "sunny"
        }
        return "cloudy"
    };

    return <React.Fragment>
        <Card>
            <div className={classes['current-hour-header']}>
                <h3>
                    CurrentHour Weather ForeCast
                </h3>
            </div>
            <div className={classes['current-hour']}>
                <div>
                    {todaySkyCondition() === "sunny" ? <img src={sunny} className={img_classes.img} /> : (todaySkyCondition() === "rainy" ? <img src={rain_cloudy} className={img_classes.img} /> : <img src={partly_cloudy} className={img_classes.img} />)}
                </div>
                <div className={classes['current-temp']}>
                    <span className={classes.number}>{currentWeather.temp_c} </span>
                    <div className={classes.units}>
                        <span>&deg;C  </span>
                    </div>
                </div>
                <div className={classes.data}>
                    <span>Precipitation(in mm): {precipitation} </span>
                    <span>Humidity: {currentWeather.humidity}%</span>
                    <span>WindSpeed: {currentWeather.wind_kph} kmph</span>
                </div>
            </div>
        </Card>
        {/* <Card>
            <div className={area_classes.area}>
                <div className={area_classes.place}>
                    <span>{location.name}, {location.region}</span>
                </div>
                <div className={area_classes.details}>
                    <span>{time}</span>
                </div>
                <div className={area_classes.details}>
                    <span>{currentCondition || "Sunny"}</span>
                </div>
            </div>
        </Card> */}
    </React.Fragment>
};

export default CurrentHour;