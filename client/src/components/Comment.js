import React from "react";
import Rating from "./Rating.js";
import { Link } from "react-router-dom";

function Comment({ review, handleDeleteComment, handleChangeRating }) {
  // function handleChangeRating(rating) {
  //     console.log(review)
  //     console.log(rating.id)

  //     console.log("handling rating change")
  //     // console.log(review.rating)
  //     // console.log(review.id)

  // }

  return (
    <>
      {review.user_name}: <br />
      {review.comment.substring(0, 20)} ...{" "}
      <button onClick={() => handleDeleteComment(review.id)}>X</button>
      <br />
      <p>
        <Link className="seemorebutton" to={`/comment/${review.id}`}>
          Full Comment
        </Link>
      </p>
      <p>
        <Rating
          review={review}
          reviewRating={review.rating}
          handleChangeRating={handleChangeRating}
        />
        <br />
        <br />
      </p>
    </>
  );
}

export default Comment;
