import React from 'react'
import Rating from './Rating.js'

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
        </>
    )
}

export default Comment;