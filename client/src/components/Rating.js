import { React } from "react";

function Rating({ reviewRating, setReviewRating }) {
  let buttons = generateRatingButtons(reviewRating, setReviewRating);

  return <div>{buttons}</div>;
}

export function generateRatingButtons(rating, onClick) {
    let ratingButtons = [];

    for (let i = 0; i < rating; i++) {
      ratingButtons.push(
        <button className="like" onClick={()=>onClick(i + 1)} key={i}>
          ❤️
        </button>
      );
    }

    for (let i = rating; i < 10; i++) {
      ratingButtons.push(
        <button className="dislike" onClick={() => onClick(i + 1)} key={i}>
          ♡
        </button>
      );
    }
    return ratingButtons;
  }
export default Rating;
