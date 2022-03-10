import React from 'react'
import Rating from './Rating.js'
import {Link} from 'react-router-dom'

function Comment({review, handleDeleteComment, handleChangeRating}) {
  
    // function handleChangeRating(rating) {
    //     console.log(review)
    //     console.log(rating.id)
        
    //     console.log("handling rating change")
    //     // console.log(review.rating)
    //     // console.log(review.id)
       
    // }

    return (
        <>
        {review.user_name}: <br/>
        {review.comment.substring(0,4)} ... <button onClick={() => handleDeleteComment(review.id)}>X</button>  <br/> 
        <Rating review = {review} reviewRating={review.rating} handleChangeRating={handleChangeRating}/><br/><br/>
        <Link to={`/comment/${review.id}`} className="seemorebutton">See More</Link>
        </>
    )
}

export default Comment;