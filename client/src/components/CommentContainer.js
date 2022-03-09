import React from 'react';
import Comment from './Comment.js'

function CommentContainer({reviews, handleDeleteComment}){
    function handleChangeRating(rating, id) {
        console.log(reviews)
        console.log(rating, id)
        
        console.log("handling rating change")
        // console.log(review.rating)
        // console.log(review.id)
       
    }

    return(
        <>
          <ul>
          {reviews.map((review)=> (
                <Comment review={review} handleDeleteComment={handleDeleteComment} handleChangeRating={handleChangeRating}/>
            ))} 
          </ul> 
        </>
    )
}

export default CommentContainer;