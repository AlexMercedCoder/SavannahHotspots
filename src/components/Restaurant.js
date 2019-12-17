import React from 'react';
import './Restaurant.css';
import Comments from './Comments';

//////////////////////////////
// Restaurant
// Display a single restaurant


const Restaurant = (props) => {

    //Switch to toggle visibility of comments
    const [state,setState] = React.useState({
        coswitch: false
    })

    //toggle function to toggle switch
    const toggle = () => {
        setState({coswitch: !state.coswitch});
    }

    const showComment = (<div>
    <button onClick={toggle}>Hide</button>
    <Comments restid={props.rest.id}/>
    </div>
    );

    const noComment = (<div>
    <button onClick={toggle}>Show Comments</button>
    </div>
    );

    const commentsExist = state.coswitch ? showComment : noComment;



        return (
                    <div key={props.rest.id} className="rest">
                    <h3>{props.rest.name}</h3>
                    <img className="restImg" src={props.rest.image_url} alt={props.rest.name}/>
                    <p>{props.rest.address}</p>
                    <p>{props.rest.city} - {props.rest.state} - {props.rest.postal_code}</p>
                    <p>{props.rest.phone}</p>
                    {commentsExist}
                    </div>
        )
}

export default Restaurant
