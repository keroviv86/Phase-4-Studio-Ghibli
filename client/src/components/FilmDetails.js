import React from 'react'
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

function FilmDetails(){
    const [film, setFilm] = useState(true)
    const {id} = useParams();
    const filmId = (film.id)

    useEffect(() => {
        fetch(`/films/${id}`)
          .then((r) => r.json())
          .then((film) => {
            setFilm(film);
          });
    }, [id]);

    console.log(film.title)
    

    return(
        <div className="film-detail">
            
            
        </div>


    )
}

export default FilmDetails;