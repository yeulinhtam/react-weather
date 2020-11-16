import React from 'react';
import './Table.css';

class Table extends React.Component {
    render() {
        const { showResult } = this.props;
        return (
            <div className="table_weather">
                <div className="table_weather_item">
                    <h4 className="info">{showResult.highestTemp}&#176;C</h4>
                    <span className="info_label">Hight</span>
                </div>
                <div className="table_weather_item">
                    <h4 className="info">{showResult.wind}mph</h4>
                    <span className="info_label">Wind</span>
                </div>
                <div className="table_weather_item">
                    <h4 className="info">{showResult.sunrise}</h4>
                    <span className="info_label">Sunrise</span>
                </div>
                <div className="table_weather_item">
                    <h4 className="info">{showResult.lowestTemp}&#176;C</h4>
                    <span className="info_label">Low</span>
                </div>
                <div className="table_weather_item">
                    <h4 className="info">{showResult.humidity}%</h4>
                    <span className="info_label">Humidity</span>
                </div>
                <div className="table_weather_item">
                    <h4 className="info">{showResult.sunset}</h4>
                    <span className="info_label">Sunset</span>
                </div>
            </div>
        )
    }
}

export default Table;