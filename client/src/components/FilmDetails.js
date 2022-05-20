import React from 'react'
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import SubmitComments from './SubmitComments.js'
import CommentContainer from './CommentContainer.js'

function FilmDetails({user}){
    const [currentFilm, setCurrentFilm] = useState('')
    const {id} = useParams();
    const [reviews, setReviews]= useState([])
    const [reviewsChanged, setReviewsChanged] = useState(false);

    function refreshReviews() {
      setReviewsChanged(!reviewsChanged)
    }

    useEffect(() => {
        fetch(`/films/${id}`)
          .then((r) => r.json())
          .then((film) => {
            setCurrentFilm(film);
            setReviews(film['reviews'])
          });
    }, [id, reviewsChanged]);  

    function handleDeleteComment(id){
      // const itemToDelete = reviews.filter((comment)=>(
      //   (comment.id !== id)
      // ))
      // setReviews(itemToDelete)
      refreshReviews()
    }

    return(
        <div className="film-detail">
          <h1>{currentFilm.title}</h1>

          <h2>{currentFilm.original_title}</h2>
          <img src={currentFilm.image} alt="banner"/>
          
          <p>{currentFilm.description}</p>
          <p>Director: {currentFilm.director}</p>
          <p>Release Date: {currentFilm.release_date}</p>
          <p>Run Time: {currentFilm.running_time}</p>
          <h1>COMMENTS</h1>
          <CommentContainer id={1} reviews={reviews} handleDeleteComment={handleDeleteComment} />         
          <SubmitComments user={user} film_id={currentFilm.id} key={currentFilm.id} refreshReviews={refreshReviews}/>
        </div>
        
    )
}

export default FilmDetails;