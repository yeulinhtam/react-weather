import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HomeContainer from './container/HomeContainer';
import SplashContainer from './container/SplashContainer';
import * as APP_SECERT from './contants/index';


function App(props) {

  const [data, setData] = useState({
    weather: '',
    forecast: ''
  });

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWeather = async (city) => {
      try {
        const APIkey = APP_SECERT.API_KEY;
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIkey}&units=metric`;
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${APIkey}&units=metric`;

        const resWeather = await fetch(weatherUrl).then();
        const resForecast = await fetch(forecastUrl);

        if(!resWeather.ok || !resForecast.ok){
            setError('Error when fetch data')
        }
        const weather = await resWeather.json();
        const forecast = await resForecast.json();

        setData({
          weather: weather,
          forecast: forecast
        })

        setTimeout(() => {
          setLoading(false);
        }, 3000)
      } catch (err) {
        setError(err);
        console.log('error: ', err);  
      }
    }
    getWeather('ho chi minh');
  }, []);


  const onSubmitSearch = async (city) => {
    try {
      const APIkey = APP_SECERT.API_KEY;
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIkey}&units=metric`;
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${APIkey}&units=metric`;

      const resWeather = await fetch(weatherUrl);
      const resForecast = await fetch(forecastUrl);

      if(!resWeather.ok || !resForecast.ok){
        setError(true);
        throw new Error('Tap doesn\'t exists', 404);
      }

      const weather = await resWeather.json();
      const forecast = await resForecast.json();

      setData({
        weather: weather,
        forecast: forecast
      })
        setError(false);
    } catch (err) {
      setError(err);
    }
  }


  return (
    <React.Fragment>
      {loading ? <SplashContainer /> : <HomeContainer data={data} onSubmitSearch={onSubmitSearch} error = {error} />}
    </React.Fragment>
  );
}

export default App;
