import React, {useState} from "react";
import Rating from "./components/Rating.js";

function SubmitComments({user, film_id, addNewReview}){
    const [newComment, setNewComment]= useState('')
    const [rating, setRating] = useState(10)
    
    function handleAddComment() {
        setNewComment("")
        fetch('/reviews', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            film_id: film_id,
            user_id: user['id'],
            comment: newComment,
            rating: rating
          })
        }).then(res=>res.json()).then(data=>addNewReview(data))
      }
    
    return(
        <>
        <form onSubmit= {(event)=>{event.preventDefault(); handleAddComment(newComment, film_id)}}>
         <label>
            Add Comment:
            <input type="text" value= {newComment} onChange={(e)=>setNewComment(e.target.value)}  />
         </label>
         <input type="submit" value="Submit" />
        </form>

        <Rating
          reviewRating={rating}
          setReviewRating={setRating}
        />
        </>
    )
}

export default SubmitComments