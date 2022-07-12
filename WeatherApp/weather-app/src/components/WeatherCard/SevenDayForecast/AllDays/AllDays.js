import React from 'react';

import classes from './AllDays.module.css';

import sunny from './../../../../assets/fully_sunny.jfif';
import partly_cloudy from './../../../../assets/partly_cloudy.png';
import rain_cloudy from './../../../../assets/rain_cloudy.png';

import Card from '../../../../UI/Card';

import dummy_data from './../../../../sample-json/Data.json';

const AllDays = props => {
    return <div className={classes.cards}>
        {
            dummy_data.map(data => {
                return <Card key={data.day}>
                    <div className={classes.card}>
                        <span className={classes.day}>{data.day}</span>
                        <div>
                            {data.sky === "sunny" ? <img src={sunny} className={classes.img} /> : (data.sky === "rainy" ? <img src={rain_cloudy} className={classes.img} /> : <img src={partly_cloudy} className={classes.img} />)}
                        </div>
                        <div className={classes.temp}>
                            <span className={classes['lower-temp']}>{data.minTemp.toFixed(1)}&deg;C</span>
                            <span className={classes['upper-temp']}>{data.maxTemp.toFixed(1)}&deg;C</span>
                        </div>
                    </div>
                </Card>
            })
        }
    </div>
};

export default AllDays;
