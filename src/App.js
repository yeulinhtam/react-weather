import React from 'react';
import './App.css'
import Search from './components/Search';
import Title from './components/Title';
import Table from './components/Table';
import Location from './components/Location';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import NotFound from './components/NotFound';
import * as APP_SECERT from './contants/index';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weatherInfo: null,
      error: false
    }
  }

  async componentDidMount() {

    let cityName = await fetch('http://ipinfo.io?token=96337b6d73ef84');
    let result = await cityName.json();

    const APIkey = APP_SECERT.API_KEY;
    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${result.region}&APPID=${APIkey}&units=metric`;
    const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${result.region}&APPID=${APIkey}&units=metric`;

    const response = await fetch(weather);
    const data = await response.json();


    const responseForecast = await fetch(forecast);
    const dataForecast = await responseForecast.json();

    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString().slice(0, 5);
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5);

    var d = new Date();

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var day = days[d.getDay()] + ' ' + d.getDate() + ' ' + months[d.getMonth()];

    const weatherInfo = {
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
      main: data.weather[0].main,
      temp: data.main.temp,
      highestTemp: data.main.temp_max,
      lowestTemp: data.main.temp_min,
      sunrise,
      sunset,
      day,
      clouds: data.clouds.all,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      forecast: dataForecast.list
    };

    this.setState({
      weatherInfo,
      error: false
    })

  }

  handleSearchCity = async (city) => {

    const APIkey = APP_SECERT.API_KEY;
    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIkey}&units=metric`;
    const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${APIkey}&units=metric`;

    try {

      const response = await fetch(weather);
      const data = await response.json();

      const responseForecast = await fetch(forecast);
      const dataForecast = await responseForecast.json();

      const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString().slice(0, 5);
      const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5);

      var d = new Date();
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      var day = days[d.getDay()] + ' ' + d.getDate() + ' ' + months[d.getMonth()];


      const weatherInfo = {
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        main: data.weather[0].main,
        temp: data.main.temp,
        highestTemp: data.main.temp_max,
        lowestTemp: data.main.temp_min,
        sunrise,
        sunset,
        day,
        clouds: data.clouds.all,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        forecast: dataForecast.list
      };

      this.setState({
        weatherInfo,
        error: false
      })
    } catch (error) {
      this.setState({
        error: true,
        weatherInfo: null,
      })
    }

  }

  render() {
    const { weatherInfo, error } = this.state;


    if (weatherInfo === null && !error) {
      return (
        <div className="loading">
            <p>Loading...</p>
        </div>
      )
    } else if (weatherInfo === null && error) {
      return (
        <div className="app">
          <Title />
          <Search handleSearchCity={this.handleSearchCity} />
          <NotFound />
        </div>
      )
    }

    return (
      <div className="app">
        <Title />
        <Search handleSearchCity={this.handleSearchCity} />
        <Table showResult={weatherInfo} />
        <Location weather={weatherInfo} />
        <CurrentWeather weather={weatherInfo} />
        <Forecast forecast = {weatherInfo.forecast}/>
      </div>
    )
  }
}

export default App;