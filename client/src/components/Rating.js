import { React } from "react";

function Rating({ reviewRating, setReviewRating }) {
  function changeRating(newRating) {
    setReviewRating(newRating);
  }

  function generateRatingButtons() {
    let ratingButtons = [];

    for (let i = 0; i < reviewRating; i++) {
      ratingButtons.push(
        <button className="like" onClick={() => changeRating(i + 1)} key={i}>
          ❤️
        </button>
      );
    }

    for (let i = reviewRating; i < 10; i++) {
      ratingButtons.push(
        <button className="dislike" onClick={() => changeRating(i + 1)} key={i}>
          ♡
        </button>
      );
    }
    return ratingButtons;
  }

  let buttons = generateRatingButtons();

  return <div>{buttons}</div>;
}

export default Rating;
