import React, {useState} from "react";

function SubmitComments({film_id, handleAddComment, newComment, setNewComment}){
    // const [newComment, setNewComment]= useState('')
    
    function handleSubmit(e){
        e.preventDefault();
        handleAddComment(newComment, film_id);
    }
   
    return(
        <>
        <form onSubmit= {handleSubmit}>
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