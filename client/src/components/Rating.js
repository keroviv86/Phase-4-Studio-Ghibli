import {React, useState} from 'react';

function Rating({review, reviewRating, handleChangeRating}) {
    const [rating, setRating] = useState(reviewRating)
    
    function changeRating(newRating) {
        setRating(newRating)
        console.log(rating)
   
        // const updateRating = {
        //     rating: rating
        // }
        // fetch(`/user_join_films/${review.id}`, {
        //     method: "PATCH",
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(updateRating)
        //   }).then(res=>res.json())
        //   .then((rating) =>handleChangeRating(rating))
        handleChangeRating(rating)
    }


    let ratingButtons = []

    for(let i = 0; i < rating; i++) {
        ratingButtons.push(<button onClick={() => changeRating(i+1)}>*</button>)
    }

    for(let i = rating; i < 10; i++) {
        ratingButtons.push(<button onClick={() => changeRating(i+1)}>o</button>)
    }

    return (
        <li>
        {ratingButtons}
        </li>
    )
}

export default Rating;