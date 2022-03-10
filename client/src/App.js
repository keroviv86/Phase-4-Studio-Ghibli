
import './App.css';
import Login from './components/Login.js';
import Home from './components/Home.js';

import NavBar from './components/NavBar.js';
import FilmContainer from './components/FilmContainer'
import FilmDetails from './components/FilmDetails'

import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react'
import FullComments from './components/FullComments.js'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [film, setFilm] = useState([])
  const [searchFilm, setSearchFilm] = useState("")
  const [reviewsModified, setReviewsModified] = useState(false);
  

  function handleRemoveReview(id) {
    fetch(`/user_join_films/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(setReviewsModified(!reviewsModified))
  }


  useEffect(() => {
    fetch("/authorized_user")
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((user) => {
              setIsAuthenticated(true);
              setUser(user);
            });
        }
      });

    fetch('/films')
      .then(res => res.json())
      .then(data => setFilm(data))
  }, [])

  const allFilms = [...film]
    .filter((items) => {
      return items.title.toLowerCase().includes(searchFilm.toLowerCase());
    })


  function handleAddComment(newComment, film_id) {
    console.log(newComment)
    console.log(user['id'])
    console.log(film_id)
    fetch('/user_join_films', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        film_id: film_id,
        user_id: user['id'],
        comment: newComment,
        rating: 0
      })
    })
  }



  if (!user) return <Login
    onLogin={setUser}
    name={name}
    setName={setName}
    password={password}
    setPassword={setPassword}
    setIsAuthenticated={setIsAuthenticated}
  />;
  // if (!isAuthenticated) return <Login error= {'please login'} setIsAuthenticated={setIsAuthenticated} onLogin={setUser}/>;
  return (

    <div className="App">
      <NavBar setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} user={user} setUser={setUser} />
      <Routes>
        <Route path="/login" element={<Login
          onLogin={setUser}
          name={name}
          setName={setName}
          password={password}
          setPassword={setPassword}
          setIsAuthenticated={setIsAuthenticated}
        />} />
        <Route path="/comment/:id" element={<FullComments />} />
        <Route path="/films/:id" element={<FilmDetails handleAddComment={handleAddComment} handleDeleteComment={handleRemoveReview} username={name} user={user} />} />
        <Route path="/home" element={<Home name={name} user={user} />} />
        <Route path="/films" element={<FilmContainer allFilms={allFilms} setSearchFilm={setSearchFilm} />} />

      </Routes>
      {/* {isAuthenticated? <p>Welcome </p>: <p>please log in</p>} */}
    </div>
  );
}

export default App;
