import React from 'react';
import './Forecast.css';

class Forecast extends React.Component {
    render() {
        const { forecast } = this.props;
        return (
            <div>
                <span className="forecast_title">Forecast</span>
                <div className="forecast_wrapper">
                    {
                        forecast.map((item) => {
                            const iconUrl = `https://openweathermap.org/img/w/${item.weather[0].icon}.png`;
                            return (
                                <div className="forecast_item" key={item.dt}>
                                    <h4 className="forecast_date">{item.dt_txt.slice(5, 7)}.{item.dt_txt.slice(8, 10)}</h4>
                                    <span className="forecast_time">{item.dt_txt.slice(11, 13) * 1}:00</span>
                                    <img src={iconUrl} className="forecast_image" alt="not found"></img>
                                    <span className="temperature">{Math.floor(item.main.temp * 1) / 1}°</span>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}

export default Forecast;