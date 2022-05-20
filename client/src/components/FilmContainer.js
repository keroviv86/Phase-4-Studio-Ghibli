import React, { useEffect, useState } from "react";
import FilmCard from "./FilmCard";

function FilmContainer() {
  const [films, setFilms] = useState([]);
  const [searchFilm, setSearchFilm] = useState("");

  useEffect(() => {
    fetch("/films")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFilms(data);
      });
  }, []);

  const displayFilm = films
    .filter((items) => {
      return items.title.toLowerCase().includes(searchFilm.toLowerCase());
    })
    .map((film) => (
      <FilmCard
        id={film.id}
        key={film.id}
        title={film.title}
        image={film.image}
      />
    ));

  return (
    <main>
      <div>
        <h1 className="title">
          Studio<strong>Ghibli</strong>Database
        </h1>
        <form className="search-box">
          <input
            className="search-input"
            type="search"
            placeholder="Search for film..."
            required
            onChange={(e) => setSearchFilm(e.target.value)}
          />
        </form>
      </div>
      <div className="film-container">{displayFilm}</div>
    </main>
  );
}

export default FilmContainer;
