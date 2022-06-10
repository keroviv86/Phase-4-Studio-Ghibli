import React, { useEffect, useState } from "react";
import Comment from "./Comment.js";
import SubmitComments from "../SubmitComments.js";

function CommentContainer({ user, film_id }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`/films/reviews/${film_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [film_id]);

  function onHandleDeleteComment(id) {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setReviews(reviews.filter((review) => review.id !== id));
  }

  function addNewReview(newReview) {
    setReviews([...reviews, newReview])
  }

  return (
    <>
      <ul>
        {reviews.map((review) => (
          <Comment
            review={review}
            handleDeleteComment={onHandleDeleteComment}
            key={review.id}
          />
        ))}
      </ul>
      <SubmitComments
        user={user}
        film_id={film_id}
        addNewReview={addNewReview}
      />
    </>
  );
}

export default CommentContainer;
