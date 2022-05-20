import React from 'react'
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

function FullComments(){
    const [comment, setComment] = useState('')
    const {id} = useParams();
    useEffect(() => {
        fetch(`/reviews/${id}`)
          .then((r) => r.json())
          .then((data) => {
            setComment(data);
            
          });
    }, [id]);  

    console.log(comment)
    // document.body.insertAdjacentHTML("afterbegin", "<p>Hello,<Br/>World!</p>");  
    return (
      <div>
        <p>{comment.comment}</p>
        <link href="https://fonts.googleapis.com/css?family=Baloo+2:400,800&display=swap" rel="stylesheet"></link>
      </div>
        
    )
}

export default FullComments