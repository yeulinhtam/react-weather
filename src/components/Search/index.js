import React from 'react';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    handleInputChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSearchCity = (e) => {
        e.preventDefault();
        const { value } = this.state;
        this.props.onHanldeSearch(value);
    }


    render() {
        const { value } = this.state;
        return (
            <div className="search_input">
                <form onSubmit={this.handleSearchCity} className="search-form">
                    <FontAwesomeIcon icon={faSearch} className="icon_search" />
                    <input type="text"
                        placeholder="Enter city"
                        value={value}
                        onChange={this.handleInputChange}></input>
                </form>
            </div>
        )
    }
}

export default Search;
