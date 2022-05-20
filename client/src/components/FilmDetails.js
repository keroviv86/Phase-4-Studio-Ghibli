import React from 'react'
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import CommentContainer from './CommentContainer.js'

function FilmDetails({user}){
    const [currentFilm, setCurrentFilm] = useState('')
    const {id} = useParams();

    useEffect(() => {
        fetch(`/films/${id}`)
          .then((r) => r.json())
          .then((film) => {
            setCurrentFilm(film);
          });
    }, [id]);  

    return(
        <div className="film-detail">
          <h1>{currentFilm.title}</h1>

          <h2>{currentFilm.original_title}</h2>
          <img src={currentFilm.image} alt="banner"/>
          
          <p>{currentFilm.description}</p>
          <p>Director: {currentFilm.director}</p>
          <p>Release Date: {currentFilm.release_date}</p>
          <p>Run Time: {currentFilm.running_time}</p>
          <h1>REVIEWS</h1>
          <CommentContainer user={user} film_id={1} />         
        </div>
        
    )
}

export default FilmDetails;