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
    console.log(weatherCtx);

    const currentWeather = weatherCtx.currentWeather;

    const precipitation = currentWeather.precipitation;

    const location = weatherCtx.location;

    const time = location.localtime;

    const currentCondition = currentWeather.weatherCondition;

    const todaySkyCondition = () => {
        if (currentWeather.weatherCondition && currentWeather.weatherCondition.includes("rain")) {
            return "rainy"
        } else if (currentWeather.WeatherContext && currentWeather.weatherCondition.includes("sun")) {
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
            <div className={classes['forecast-details']}>
                <div className={classes['current-hour']}>
                    <div className={classes['weather-data']}>
                        <div>
                            {todaySkyCondition() === "sunny" ? <img src={sunny} className={img_classes.img} alt="sunny" /> : (todaySkyCondition() === "rainy" ? <img src={rain_cloudy} className={img_classes.img} alt="rainy" /> : <img src={partly_cloudy} className={img_classes.img} alt="cloudy" />)}
                        </div>
                        <div className={classes['current-temp']}>
                            <span className={classes.number}>{currentWeather.temp_c} </span>
                            <div className={classes.units}>
                                <span>&deg;C  </span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.data}>
                        <span><strong>Precipitation(in mm):</strong> {precipitation} </span>
                        <span><strong>Humidity:</strong> {currentWeather.humidity}%</span>
                        <span><strong>WindSpeed:</strong> {currentWeather.wind_kph} kmph</span>
                    </div>
                </div>
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
            </div>
        </Card>
    </React.Fragment>
};

export default CurrentHour;