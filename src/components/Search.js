import React from 'react';
import './Search.css';
import Display from './Display.js'
import Restaurant from  './Restaurant.js'

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            zip: null
        }
    }
    handleCreateSearch = async (zip) => {
        const response = await fetch(`https://opentable.herokuapp.com/api/restaurants?zip=${this.state.zip}`);
        const json = await response.json();
        await this.setState({
            restaurants: json
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.handleCreateSearch(this.state.zip);
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]:event.target.value
        })
    }
    toggleSDisplay = () => {
        let toggleSearchDisplay;
        if(this.state.zip > 9999 && this.state.zip < 100000){
            toggleSearchDisplay = <Display    zip={this.state.zip} />
        } else {
            toggleSearchDisplay = <h1 className="SearchText">Please enter 5 digit zipcode above</h1>
        }
        return toggleSearchDisplay;
    }
    render() {
        return (
            <div>
                <form className="zipForm" onSubmit={this.handleSubmit}>
                    <label htmlFor="zip"> Zipcode
                    <input className="zipInput" type="text" value={this.state.zip} onChange={this.handleChange} id="zip" placeholder="enter zipcode here" />
                    </label>
                </form>
                {this.toggleSDisplay()}
            </div>
        )
    }
}


export default Search
