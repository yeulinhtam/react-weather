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
        const { description, temp, main } = this.props.weather;
        
        let weatherIcon = null;

        if (main === 'Thunderstorm') {
          weatherIcon = <FontAwesomeIcon icon={faBolt} />;
        } else if (main === 'Drizzle') {
          weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
        } else if (main === 'Rain') {
          weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
        } else if (main === 'Snow') {
          weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
        } else if (main === 'Clear') {
          weatherIcon = <FontAwesomeIcon icon={faSun} />;
        } else if (main === 'Clouds') {
          weatherIcon = <FontAwesomeIcon icon={faCloud} />;
        } else {
          weatherIcon = <FontAwesomeIcon icon={faSmog} />;
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