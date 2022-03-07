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
            <h1>{}</h1>
            
        </div>


    )
}

export default FilmDetails;