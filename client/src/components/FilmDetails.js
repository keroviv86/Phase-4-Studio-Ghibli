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

  
    console.log(film)

    return(
        <div className="film-detail">
          <h1>{film.title}</h1>
          <h2>{film.original_title}</h2>
          <img src={film.movie_banner} alt="banner"/>
          
          <p>{film.description}</p>
          <p>Director: {film.director}</p>
          <p>Release Date: {film.release_date}</p>
          <p>Run Time: {film.running_time}</p>
          <p>Rating: {film.rt_score}%</p>
        </div>


    )
}

export default FilmDetails;