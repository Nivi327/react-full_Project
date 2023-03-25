import React, { useContext} from 'react';

import classes from './WeatherCard.module.css';

import MainCard from '../../UI/MainCard';
import SevenDayForeCast from './SevenDayForecast/SevenDayForecast';
import CurrentHour from './SevenDayForecast/CurrentHour/CurrentHour';
// import Area from './SevenDayForecast/Area/Area';
import WeatherContext from '../../store/weather-context';

const WeatherCard = props => {

    const weatherCtx = useContext(WeatherContext);

    let content = "<h2> The data is Fetching </h2>"
    if (weatherCtx.loading) {
        content = "Loading.."
    }
    if (weatherCtx.error) {
        content = weatherCtx.error
    }
    if (!weatherCtx.loading && weatherCtx.hourlyWeather.length === 0) {
        content = "Data cannot be fetched Try again Later";
    }
    if (weatherCtx.currentWeather !== {}) {
        content = <MainCard>
            <div className={classes['upper-div']}>
                <CurrentHour />
                {/* <Area /> */}
            </div>
            <SevenDayForeCast />
        </MainCard>
    }

    return <div className={classes['weather-card']}>
        {content}
    </div >
};

export default WeatherCard;