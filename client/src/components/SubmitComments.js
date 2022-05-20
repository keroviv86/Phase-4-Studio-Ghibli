import React, {useState} from "react";

function SubmitComments({user, film_id, refreshReviews}){
    const [newComment, setNewComment]= useState('')
    
    function handleAddComment() {
        fetch('/reviews', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            film_id: film_id,
            user_id: user['id'],
            comment: newComment,
            rating: 0
          })
        }).then(refreshReviews)
        setNewComment("")
      }
    
    return(
        <>
        <form onSubmit= {()=>handleAddComment(newComment, film_id)}>
         <label>
            Add Comment:
            <input type="text" value= {newComment} onChange={(e)=>setNewComment(e.target.value)}  />
         </label>
         <input type="submit" value="Submit" />
        </form>
        </>
    )
}

export default SubmitComments