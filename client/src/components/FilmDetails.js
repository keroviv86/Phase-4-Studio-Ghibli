import React from 'react'
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

function FilmDetails(){
    const [film, setFilm] = useState(true)
    const {id} = useParams();
    

    useEffect(() => {
        fetch(`/films/${id}`)
          .then((r) => r.json())
          .then((film) => {
            setFilm(film);
          });
    }, [id]);

  
    

    const ratingArray = film.user_join_films

    console.log(ratingArray)
    
   

    return(
        <div className="film-detail">
          <h1>{film.title}</h1>
          <h2>{film.original_title}</h2>
          <img src={film.image} alt="banner"/>
          
          <p>{film.description}</p>
          <p>Director: {film.director}</p>
          <p>Release Date: {film.release_date}</p>
          <p>Run Time: {film.running_time}</p>
          
          
        </div>
        
    )
}

export default FilmDetails;