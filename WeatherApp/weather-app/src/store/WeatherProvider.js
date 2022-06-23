import { useReducer, useEffect } from "react";
import WeatherContext from "./weather-context";

const initialData = {
    currentWeather: {},
    hourlyWeather: [],
    location: {},
    loading: false,
    error: null
}

const weatherReducer = (state, action) => {
    if (action.type === 'WEATHER_DATA') {
        return { ...state, currentWeather: action.currentWeather, hourlyWeather: action.hourlyWeather, location: action.location };
    } else if (action.type === 'LOADING') {
        return { ...state, loading: action.loading };
    } else if (action.type === 'ERROR') {
        return { ...state, error: action.error };
    }
    return initialData;
}

const WeatherProvider = props => {

    const [weatherData, dispatchWeatherData] = useReducer(weatherReducer, initialData);

    const getCurrentWeatherData = async () => {
        dispatchWeatherData({ type: 'LOADING', loading: true })
        try {
            const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=541d21e46cb04ecab29103103221306&q=16.9891,82.2475');

            if (!response.ok) {
                throw new Error('Something Went Wrong');
            }

            const data = await response.json();

            const currentWeather = {
                temp_c: data.current.temp_c,
                precipitation: data.current.precip_mm,
                humidity: data.current.humidity,
                wind_kph: data.current.wind_kph,
                weatherCondition: data.current.condition.text,
            }

            const hourlyWeather = data.forecast.forecastday[0].hour
            const location = {
                name: data.current.location.name,
                region: data.current.location.region,
                localtime: data.current.location.localtime
            }

            console.log(currentWeather);

            dispatchWeatherData({ type: 'WEATHER_DATA', currentWeather: currentWeather, hourlyWeather: hourlyWeather, location: location });

        } catch (error) {
            dispatchWeatherData({ type: 'ERROR', error: error });
        }
        dispatchWeatherData({ type: 'LOADING', loading: false });
    }

    useEffect(() => {
        getCurrentWeatherData();
    }, []);


    const weatherContext = {
        currentWeather: weatherData.currentWeather,
        hourlyWeather: weatherData.hourlyWeather,
        loading: weatherData.loading,
        location: weatherData.location,
        error: weatherData.error
    }

    console.log(weatherContext);

    return <WeatherContext.Provider value={weatherContext}>
        {props.children}
    </WeatherContext.Provider>
};

export default WeatherProvider;
