import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from '@fortawesome/free-solid-svg-icons';

import './CurrentWeather.css';


class CurrentWeather extends React.Component{
    render(){
        const { temp, main } = this.props.weather;
        
        let weatherIcon = null;

        if (main === 'Thunderstorm') {
          weatherIcon = <FontAwesomeIcon icon={faBolt} className="weather-icon"/>;
        } else if (main === 'Drizzle') {
          weatherIcon = <FontAwesomeIcon icon={faCloudRain} className="weather-icon"/>;
        } else if (main === 'Rain') {
          weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} className="weather-icon"/>;
        } else if (main === 'Snow') {
          weatherIcon = <FontAwesomeIcon icon={faSnowflake} className="weather-icon"/>;
        } else if (main === 'Clear') {
          weatherIcon = <FontAwesomeIcon icon={faSun} className="weather-icon"/>;
        } else if (main === 'Clouds') {
          weatherIcon = <FontAwesomeIcon icon={faCloud} className="weather-icon"/>;
        } else {
          weatherIcon = <FontAwesomeIcon icon={faSmog} className="weather-icon"/>;
        }

        return(
            <div className="current_weather">
                {weatherIcon}
                <div className="temperature_wrapper">
                <h4 className="temperature">{temp}°</h4>
                <span className="small_label">{main }</span>
                </div>
            </div>
        )
    }
}


export default CurrentWeather;