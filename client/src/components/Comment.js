import React from "react";
import { Link } from "react-router-dom";
import {generateRatingButtons} from "./Rating";

function Comment({ review, handleDeleteComment }) {

  let ratingButtons = generateRatingButtons(review.rating, () => {})

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
        <br/>
        <br/>
        {ratingButtons}

      </p>
    </>
  );
}

export default Comment;
