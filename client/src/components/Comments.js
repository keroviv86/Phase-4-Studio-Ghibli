import React, {useState} from "react";

function Comments(){
    return(
        <>
        <form>
         <label>
            Add Comment:
   
            <input type="text"   />
         </label>
         <input type="submit" value="Submit" />
        </form>
        </>
        
    )
}

export default Comments