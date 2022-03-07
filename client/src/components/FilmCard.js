import React from 'react'
import {Link} from 'react-router-dom'

function FilmCard({id,title,image}){
    return(
        <div className="film-card">
            <h3>{title}</h3>
            <img src={image} alt=""/>
            <p> 
                <button className="seemorebutton">
                    <Link to={`/films/${id}`} className="seemorebutton">See More</Link>
                </button>
            </p>
        </div>


    )
}

export default FilmCard;
