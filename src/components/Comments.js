import React from 'react';
import './Comments.css';


const Comments = (props) => {
//using a function component and react hooks to keep the form state seperate from the comment state
    const [formState,setFormState] = React.useState({
        author: "",
        comment: "",
        password: ""
    })

    const [comments,setComments] = React.useState({
        comments: []
    })

//Functions

    const getComments = async () => {
            const response = await fetch(`https://cors-anywhere.herokuapp.com/https://savvyhotspotsapi.herokuapp.com/api/comments/${props.restid}`);
            const json = await response.json();
            setComments({
                comments: json
            });
            console.log(comments)
    }

    const handleChange = (event) => {
        setFormState(formState => ({...formState, [event.target.name]:event.target.value}));

    }
//Since this is a function components, I have use the useEffect hook instead of lifecycle Functions
//The Empty array as the second parameter ensures it only runs on mount, without it, it will repeat on update causing a loop

    React.useEffect(()=>{
        getComments();
    },[])


//Below we render all comments and then below that a form to add comments

    return (
        <div className="commentscont">
        {comments.comments.map((comment,index)=>(
            <div className="commentcont" key={comment.id}>
            <p className="author">{comment.author}</p>
            <p className="date">{comment.date}</p>
            <p className="comment">{comment.comment}</p>
            </div>
        ))}

        <div className="form">
            <form>
                <label for="author">Name</label>
                <input maxlength="30" type="text" name="author" onChange={handleChange}/>
                <label for="comment">Comment</label>
                <input maxlength="140" type="text" name="comment" onChange={handleChange}/>
                <label for="password">Comment Password</label>
                <input maxlength="8" type="text" name="password" onChange={handleChange}/>
                <input type="submit" value="submit"/>


            </form>

        </div>
        </div>
    )



}

export default Comments
