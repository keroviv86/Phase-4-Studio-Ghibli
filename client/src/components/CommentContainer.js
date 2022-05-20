import React, {useState} from 'react';
import Comment from './Comment.js'

function CommentContainer({reviews, handleDeleteComment}){
    // const [reviewsModified, setReviewsModified] = useState(false);
    function handleChangeRating(rating, id) {

    }

    function onHandleDeleteComment(id) {
        fetch(`/reviews/${id}`, {
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