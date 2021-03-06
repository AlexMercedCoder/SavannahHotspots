import React from 'react';
import Comment from './Comment';
import './Comments.css';


const Comments = (props) => {
//using a function component and react hooks to keep the form state seperate from the comment state

    const [comments,setComments] = React.useState({
        comments: []
    })

//Functions


    //This function grabs the comments for the restaurant
    const getComments = async () => {
            const response = await fetch(`https://cors-anywhere.herokuapp.com/https://savvyhotspotsapi.herokuapp.com/api/comments/${props.restid}`);
            const json = await response.json();
            await setComments({
                comments: json
            });
            console.log(comments)

    }

    const deleteComment = async (id, index) => {
        const password = prompt('What is your comments password?')
        if (password === comments.comments[index].password){
            const response = await fetch(`https://cors-anywhere.herokuapp.com/https://savvyhotspotsapi.herokuapp.com/api/comments/${id}`, {
              body: "",
              method: 'DELETE',
              headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
                    }
                });
            const json = await response.json();
            const [...newComments] = comments.comments;
            newComments.splice(index,1);
            setComments({comments:newComments});
            return json;
        }else {
            alert('wrong password')
        }

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
            <p className="comment">{comment.comment}</p>
            <p className="date">{comment.date}</p>
            <p className="delete" onClick={()=>{deleteComment(comment.id, index)}}> X </p>
            </div>
        ))}

        <Comment restid={props.restid} get={getComments}/>
        </div>
    )



}

export default Comments
