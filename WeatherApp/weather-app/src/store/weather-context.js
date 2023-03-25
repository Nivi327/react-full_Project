import React from 'react';

const WeatherContext = React.createContext({
    currentWeather: {},
    hourlyWeather: [],
    location: {},
    loading: false,
    error: null,
    changeCity:(city) => {}
});

export default WeatherContext;