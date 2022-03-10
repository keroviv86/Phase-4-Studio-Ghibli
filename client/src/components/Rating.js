import {React, useState} from 'react';

function Rating({review, reviewRating, handleChangeRating}) {
    const [rating, setRating] = useState(reviewRating)
    
    function changeRating(newRating) {
        setRating(newRating)
        console.log(rating)
    }

    function handSubmit(e){
        e.preventDefault();
        fetch(`/user_join_films/${review.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                rating: rating 
            }),
        })
        .then((r) => r.json())
    }
    



    let ratingButtons = []

    for(let i = 0; i < rating; i++) {
        ratingButtons.push(<button className = "like" onClick={() => changeRating(i+1)}>❤️</button>)
    }

    for(let i = rating; i < 10; i++) {
        ratingButtons.push(<button className = "dislike" onClick={() => changeRating(i+1)}>♡</button>)
    }

    return (
        <div>
        <form onSubmit={handSubmit}>
            <p>
                {ratingButtons}
            </p>
       
        <button
            className= "submit"
            type='submit'
            name='submit'>
            Submit Rating
            </button>
        </form>
        </div>
    )
}

export default Rating;