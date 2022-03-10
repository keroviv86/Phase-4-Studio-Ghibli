import React, {useState} from 'react';
import Comment from './Comment.js'

function CommentContainer({reviews, handleDeleteComment}){
    // const [reviewsModified, setReviewsModified] = useState(false);
    function handleChangeRating(rating, id) {
        console.log(reviews)
        console.log(rating, id)
        
        console.log("handling rating change")
        // console.log(review.rating)
        // console.log(review.id)
    }
    function onHandleDeleteComment(id) {
        fetch(`/user_join_films/${id}`, {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json'
          }
        })
        handleDeleteComment(id)
      }
    

    return(
        <>
          <ul>
          {reviews.map((review)=> (
                <Comment review={review} handleDeleteComment={onHandleDeleteComment} handleChangeRating={handleChangeRating}/>
            ))} 
          </ul> 
        </>
    )
}

export default CommentContainer;