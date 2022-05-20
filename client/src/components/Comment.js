import React from "react";
import { Link } from "react-router-dom";

function Comment({ review, handleDeleteComment }) {
  // function handleChangeRating(rating) {
  //     console.log(review)
  //     console.log(rating.id)

  //     console.log("handling rating change")
  //     // console.log(review.rating)
  //     // console.log(review.id)

  // }
  return (
    <>
      <br />
      <p>
        {review.user.name} :      {review.comment.substring(0, 20)} ... <br />
        <br />
        <Link className="seemorebutton" to={`/comment/${review.id}`}>
          Read Full Review
        </Link>
        <button onClick={() => handleDeleteComment(review.id)}>X</button>
      </p>
    </>
  );
}

export default Comment;
