import React from 'react'
import {useEffect, useState} from 'react'

function UserComments({user}){
    const [comments, setComments] = useState([])

    useEffect(() => {
    fetch("/comments")
      .then((r) => r.json())
      .then((data) => setComments(data));

  }, []);

  function userComments(){
      const filter = comments.filter((comment) => {
          return comment.user_id === user["id"]
      })
      return filter;
  }

  console.log(userComments())

  const allComments = userComments().map((comment) => {
      return comment.comment
  })

  console.log(allComments)

  
    return <div>{allComments}</div>
}

export default UserComments;