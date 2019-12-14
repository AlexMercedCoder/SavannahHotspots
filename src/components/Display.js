import React from 'react';
import './Display.css';
import Comments from './Comments';

//////////////////////////////
// DISPLAY
// Takes a Zip code as props and display restaurants from that zip code


class Display extends React.Component {
    constructor(props){


        //constructor
        //includes an array for storing restaurants
        super(props)
        this.state = {

            restaurants: []

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




    render() {
        return (
            <div>
                <h1>{this.props.location}</h1>
                {this.state.restaurants.map((rest,index) => (
                    <div className="rest">
                    <h3>{rest.name}</h3>
                    <img src={rest.image_url}/>
                    <p>{rest.address}</p>
                    <p>{rest.city} - {rest.state} - {rest.postal_code}</p>
                    <p>{rest.phone}</p>
                    <Comments restid={rest.id}/>
                    </div>
                ))}

            </div>
        )
    }
}

export default Display
