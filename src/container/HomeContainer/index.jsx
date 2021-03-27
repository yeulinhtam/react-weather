import React from 'react';
import Table from './../../components/Table';
import Search from './../../components/Search';
import Location from './../../components/Location';
import CurrentWeather from './../../components/CurrentWeather';
import Forecast from './../../components/Forecast';
import Title from './../../components/Title';
import './HomeContainer.css'
import NotFound from '../../components/NotFound';


function HomeContainer(props) {
    const { data: { weather, forecast }, error ,  onSubmitSearch } = props;

    const onHanldeSearch = (city) => {
        onSubmitSearch(city)
    }

    if(error){
        return (
            <React.Fragment>
                <div className="app">
                    <Title />
                    <Search onHanldeSearch={onHanldeSearch}/>
                    <NotFound />
                </div>
            </React.Fragment>
        );
    }

    const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString().slice(0, 5);
    const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5);

    var d = new Date();

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var day = days[d.getDay()] + ' ' + d.getDate() + ' ' + months[d.getMonth()];

    const weatherInfo = {
        city: weather.name,
        country: weather.sys.country,
        description: weather.weather[0].description,
        main: weather.weather[0].main,
        temp: weather.main.temp,
        highestTemp: weather.main.temp_max,
        lowestTemp: weather.main.temp_min,
        sunrise,
        sunset,
        day,
        clouds: weather.clouds.all,
        humidity: weather.main.humidity,
        wind: weather.wind.speed,
        forecast: forecast.list
    };

    return (
        <React.Fragment>
            <div className="app">
                <Title />
                <Search onHanldeSearch={onHanldeSearch}/>
                <Location weather={weatherInfo} />
                <div className="box">
                    <CurrentWeather weather={weatherInfo} />
                    <Table showResult={weatherInfo} />
                </div>
                <Forecast forecast={weatherInfo.forecast} />
            </div>
        </React.Fragment>
    );
}

export default HomeContainer;