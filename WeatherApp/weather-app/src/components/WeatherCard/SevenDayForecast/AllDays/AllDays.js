import React, { useContext } from 'react';

import classes from './AllDays.module.css';

import sunny from './../../../../assets/fully_sunny.jfif';
import partly_cloudy from './../../../../assets/partly_cloudy.png';
import rain_cloudy from './../../../../assets/rain_cloudy.png';

import Card from '../../../../UI/Card';

import WeatherContext from '../../../../store/weather-context';

const AllDays = props => {
    const weatherCtx = useContext(WeatherContext);
    const hourlyWeather = weatherCtx.hourlyWeather;
    const from_now = hourlyWeather.filter((data) => {
        const new_date = new Date(data.time);
        const now = new Date(Date.now())
        if (data.condition.text.trim().includes('rain')) {
            data.sky = 'rainy';
        }
        else if (data.condition.text.trim().includes('cloud')) {
            data.sky = "cloudy";
        }
        else {
            data.sky = "sunny";
        }
        return new_date.getHours() >= now.getHours();
    });
    console.log(from_now);
    return <>
        <div className={classes.heading}>
            <h1>Hourly weather Forecast</h1>
        </div><div className={classes.cards}>
            {
                from_now.map(data => {
                    return <Card key={data.time_epoch}>
                        <div className={classes.card}>
                            <span className={classes.day}>{data.time.split(' ')[1]}</span>
                            <div style={{ textAlign: 'center' }}>
                                {data.sky === "sunny" ? <img src={sunny} className={classes.img} alt="sunny" /> : (data.sky === "rainy" ? <img src={rain_cloudy} className={classes.img} alt="rainy" /> : <img src={partly_cloudy} className={classes.img} alt="cloudy" />)}
                            </div>
                            <div className={classes.temp}>
                                <span className={classes['lower-temp']}><strong>Temp(&deg;C):</strong> {data.temp_c}</span>
                                <span className={classes['lower-temp']}><strong>Humidity:</strong> {data.humidity}</span>
                                <span className={classes['lower-temp']}><strong>Wind_speed:</strong> {data.wind_kph}kmph</span>
                                <span className={classes['lower-temp']}><strong>Wind_dir:</strong> {data.wind_dir}</span>
                                <span className={classes['lower-temp']}><strong>Wind_degree:</strong> {data.wind_degree}</span>

                            </div>
                        </div>
                    </Card>
                })
            }
        </div>
    </>
};

export default AllDays;
