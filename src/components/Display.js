import React from 'react';
import './Display.css';
import Restaurant from './Restaurant';

//////////////////////////////
// DISPLAY
// Takes a Zip code as props and display restaurants from that zip code


class Display extends React.Component {
    constructor(props){


        //constructor
        //includes an array for storing restaurants
        super(props)
        this.state = {

            restaurants: [],

        }
        //counter variable for pagination
        this.counter =1
    }


    //When Component Mounts it will do an api call for restaurants in the zip prop
    componentDidMount(){
            //interpolate zip code into query url and get page one
            const queryUrl = `https://opentable.herokuapp.com/api/restaurants?zip=${this.props.zip}&page=${this.counter}`;
            console.log(queryUrl)
            fetch(queryUrl)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({restaurants: json.restaurants});
                console.log(this.state)
            });


    }

    getDerivedStateFromProps(){
            //interpolate zip code into query url and get page one
            const queryUrl = `https://opentable.herokuapp.com/api/restaurants?zip=${this.props.zip}&page=${this.counter}`;
            console.log(queryUrl)
            fetch(queryUrl)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({restaurants: json.restaurants});
                console.log(this.state)
            });


    }






    render() {
        return (
            <div className="display">
                {this.state.restaurants.map((rest,index) => (
                    <Restaurant rest={rest} key={rest.id}/>
                ))}
            </div>
        )
    }
}

export default Display
