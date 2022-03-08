import React from 'react'
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Comments from './Comments.js'
function FilmDetails(){
    const [film, setFilm] = useState(true)
    const {id} = useParams();
    const [comments, setComments] = useState(true)
    

    useEffect(() => {
        fetch(`/films/${id}`)
          .then((r) => r.json())
          .then((film) => {
            setFilm(film);
            setComments(film['user_join_films'].map((film)=>(
        film.comment
    )))
          });
    }, [id]);   

    return(
        <div className="film-detail">
          <h1>{film.title}</h1>
          <h2>{film.original_title}</h2>
          <img src={film.image} alt="banner"/>
          
          <p>{film.description}</p>
          <p>Director: {film.director}</p>
          <p>Release Date: {film.release_date}</p>
          <p>Run Time: {film.running_time}</p>

          <h1>COMMENTS</h1>
          <Comments/>
          <p>{comments}</p>
          
          
        </div>
        
    )
}

export default FilmDetails;