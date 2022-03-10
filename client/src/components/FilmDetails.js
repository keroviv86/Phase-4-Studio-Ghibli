import React from 'react'
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import SubmitComments from './SubmitComments.js'
import CommentContainer from './CommentContainer.js'

function FilmDetails({newComment, setNewComment, user}){
    const [currentFilm, setCurrentFilm] = useState('')
    const {id} = useParams();
    const [reviews, setReviews]= useState([])
    const [reviewsChanged, setReviewsChanged] = useState(false)

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

  function handleAddComment(newComment, film_id) {
    console.log(newComment)
    console.log(user['id'])
    console.log(film_id)
    console.log(newComment)
    fetch('/user_join_films', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        film_id: film_id,
        user_id: user['id'],
        comment: newComment,
        rating: 0
      })
    }).then(refreshReviews)



  

    

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
          <SubmitComments user={user} handleAddComment={handleAddComment} film_id={currentFilm.id} key={currentFilm.id} newComment={newComment} setNewComment={setNewComment}/>
          <CommentContainer id={1} reviews={reviews} handleDeleteComment={handleDeleteComment} />         
        </div>
        
    )
}

export default FilmDetails;