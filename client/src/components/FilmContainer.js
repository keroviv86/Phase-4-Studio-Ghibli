import React from 'react'
import FilmCard from './FilmCard'


function FilmContainer({film}){
    const displayFilm = film.map((film)=>
        <FilmCard
            id = {film.id}
            key= {film.id}
            title= {film.title}
            image={film.image}
        />
    
    
    )
    return(
        <main className="film-container">
            
           {displayFilm}
           
          
        </main>


    )
}

export default FilmContainer;