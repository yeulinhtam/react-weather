import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import './NotFound.css';


class NotFound extends React.Component{
    render(){
        return(
            <div className="notfound_wrapper">
            <div className="notfound">
                 <FontAwesomeIcon icon={faFrown} className="notfound_icon" />
                 <p className="notfound_text">Sorry, the specified city was not found...</p>
            </div>
           </div>
        )
    }
}

export default NotFound;