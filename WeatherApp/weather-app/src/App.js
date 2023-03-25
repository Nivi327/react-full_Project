import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import WeatherCard from './components/WeatherCard/WeatherCard';
import WeatherProvider from './store/WeatherProvider';

function App() {
  return (
    <React.Fragment>
      <WeatherProvider>
        <Header />
        <WeatherCard />
      </WeatherProvider>
    </React.Fragment>
  );
}

export default App;
