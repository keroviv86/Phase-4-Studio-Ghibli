import React, {useState} from "react";

function SubmitComments({handleAddComment, newComment, setNewComment}){
    // const [newComment, setNewComment]= useState('')
    
    function handleSubmit(e){
        e.preventDefault();
        handleAddComment(newComment);
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