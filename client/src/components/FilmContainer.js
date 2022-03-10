import React from 'react'
import FilmCard from './FilmCard'


function FilmContainer({allFilms, setSearchFilm}){
    const displayFilm = allFilms.map((film)=>
        <FilmCard
            id = {film.id}
            key= {film.id}
            title= {film.title}
            image={film.image}
        />
    
    
    )
    return(
        <main>
            <div>
                <h1 className="title">Studio<strong>Ghibli</strong>Database</h1>
                <form className= "search-box">
                    <input
                    className = "search-input" 
                    type="search"
                    placeholder="Search for film..."
                    required
                    onChange={(e)=> setSearchFilm(e.target.value)}
                    />
                </form>

            </div>
            <div className="film-container">
                {displayFilm}
            </div>
         
           
          
        </main>


    )
}

export default FilmContainer;