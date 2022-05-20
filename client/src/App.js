
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
  }, [])
  console.log("loopdy loop")
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
        <Route path="/films/:id" element={<FilmDetails user={user}  username={name} />} />
        <Route path="/home" element={<Home name={name} user={user} />} />
        <Route path="/films" element={<FilmContainer />} />

      </Routes>
      {/* {isAuthenticated? <p>Welcome </p>: <p>please log in</p>} */}
    </div>
  );
}

export default App;
