import React from 'react';
import './Main.css';



class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <>
                <div className="MainContainer">
                    <div className="MainDiv">
                        <h1>Welcome to Savannah!!!</h1>
                        <img src="https://www.savannah.com/wp-content/uploads/staysav2.jpg"/>
                        <p>"Savannah, Georgia is a charming Southern escape where art, period architecture, trendy boutiques and ghost stories are all set under a veil of Spanish moss. Savannah is a place where cuisine comes straight from the coast and cocktails are served at every meal. Come and discover the enchanting soul of Savannah."</p>
                        <h4>Explore and find restaurants in the hottest spots in Savannah! Also leave comments on your favorites! Check out the search section to search restaurants in any zip code!</h4>
                    </div>
                </div>
            </>
        )
    }
}

export default Main
