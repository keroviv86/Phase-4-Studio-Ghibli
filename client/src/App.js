
import './App.css';
import Login from './components/Login.js';
import Home from './components/Home.js';

import NavBar from './components/NavBar.js';
import SignUpForm from './components/SignUpForm';
import FilmContainer from './components/FilmContainer'
import FilmDetails from './components/FilmDetails'

import {Routes, Route} from "react-router-dom";
import {useEffect, useState} from 'react'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [film, setFilm] = useState([])
  const [searchFilm, setSearchFilm] = useState("")


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
    .then(res=>res.json())
    .then(data=> setFilm(data))

  },[])

  const allFilms = [...film]
  .filter((items)=>{
    return items.title.toLowerCase().includes(searchFilm.toLowerCase());
  })


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
        />}/>
        <Route path="/films/:id" element={<FilmDetails/>}/>
        <Route path="/home" element={<Home name={name} user={user}/>}/>
        <Route path="/films" element={<FilmContainer allFilms={allFilms} setSearchFilm={setSearchFilm}/>}/>
        
      </Routes>
      {/* {isAuthenticated? <p>Welcome </p>: <p>please log in</p>} */}
    </div>
  );
}

export default App;
