import { useReducer, useEffect } from "react";
import WeatherContext from "./weather-context";

const initialData = {
    currentWeather: {},
    hourlyWeather: [],
    location: {},
    city: {},
    enteredCity: 'london',
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
    } else if (action.type === 'LOCATION') {
        return { ...state, city: action.city };
    } else if(action.type === 'CHANGE_CITY') {
        console.log(action.enteredCity);
        return {...state, enteredCity:action.enteredCity};
    }
    return initialData;
}

const WeatherProvider = props => {

    const [weatherData, dispatchWeatherData] = useReducer(weatherReducer, initialData);

    const changeCity = (city) => {
        dispatchWeatherData({type:'CHANGE_CITY', enteredCity: city});
    }

    const getCurrentWeatherData = async () => {
        dispatchWeatherData({ type: 'LOADING', loading: true })
        try {
            console.log(weatherData);
            const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=541d21e46cb04ecab29103103221306&q=${weatherData.enteredCity}`);

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

            console.log(data);
            console.log(currentWeather);

            let hourlyWeather = data.forecast.forecastday[0].hour
            let location = {
                name: data.location.name,
                region: data.location.region,
                localtime: data.location.localtime
            }

            dispatchWeatherData({ type: 'WEATHER_DATA', currentWeather: currentWeather, hourlyWeather: hourlyWeather, location: location });

        } catch (error) {
            console.log(error);
            dispatchWeatherData({ type: 'ERROR', error: error });
        }
        dispatchWeatherData({ type: 'LOADING', loading: false });
    }

    useEffect(() => {
        getCurrentWeatherData();
    }, [weatherData.enteredCity]);

    const weatherContext = {
        currentWeather: weatherData.currentWeather,
        hourlyWeather: weatherData.hourlyWeather,
        loading: weatherData.loading,
        location: weatherData.location,
        error: weatherData.error,
        changeCity: changeCity
    }

    // console.log(weatherContext);

    return <WeatherContext.Provider value={weatherContext}>
        {props.children}
    </WeatherContext.Provider>
};

export default WeatherProvider;
