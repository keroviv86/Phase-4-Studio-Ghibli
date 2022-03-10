import React from 'react'
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

function FullComments(){
    const [comment, setComment] = useState('')
    const {id} = useParams();
    useEffect(() => {
        fetch(`/user_join_films/${id}`)
          .then((r) => r.json())
          .then((data) => {
            setComment(data);
            
          });
    }, [id]);  

    console.log(comment)

    return (
        <div>{comment.comment}</div>
    )
}

export default FullComments