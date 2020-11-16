import React from 'react';
import './Location.css';

class Location extends React.Component{
    render(){
        const { city, country, day }  = this.props.weather;
        return(
            <div className="location_wrapper">
                <h2 className="location">{city}, {country}</h2>
                <span className="date_time">{day}</span>
            </div>
        )
    }
}

export default Location;