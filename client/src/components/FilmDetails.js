import React from 'react'
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Comments from './Comments.js'
import CommentContainer from './CommentContainer.js'

function FilmDetails({handleAddComment,handleDeleteComment, username, user}){
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

    console.log(reviews)
    

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
          <Comments handleAddComment={addComment} film_id={currentFilm.id} key={currentFilm.id}/>
          {/* <CommentContainer id ={comments} comments={comments} /> */}
          <ul>
          {reviews.map((review)=> (
            <>
                 <li>{review.comment} - {review.user_name} <button onClick={() => handleDeleteComment(review.id)}>X</button></li> 
            </>
            ))} 
          </ul>          
          
        </div>
        
    )
}

export default FilmDetails;