import React from 'react'
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import SubmitComments from './SubmitComments.js'
import CommentContainer from './CommentContainer.js'

function FilmDetails({handleAddComment,newComment, setNewComment}){
    const [currentFilm, setCurrentFilm] = useState('')
    const {id} = useParams();
    const [reviews, setReviews]= useState([])
    

    useEffect(() => {
        fetch(`/films/${id}`)
          .then((r) => r.json())
          .then((film) => {
            setCurrentFilm(film);
            setReviews(film['reviews'])
          });
    }, [id]);  

    function addComment(comment) {
        handleAddComment(comment, currentFilm.id)
    }
    function handleDeleteComment(id){
      const itemToDelete = reviews.filter((comment)=>(
        (comment.id !== id)
      ))
      setReviews(itemToDelete)

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
          <SubmitComments handleAddComment={addComment} film_id={currentFilm.id} key={currentFilm.id} newComment={newComment} setNewComment={setNewComment}/>
          <CommentContainer id={1} reviews={reviews} handleDeleteComment={handleDeleteComment} />         
        </div>
        
    )
}

export default FilmDetails;