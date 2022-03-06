
import './App.css';
import Login from './components/Login.js';
import Home from './components/Home.js';
import LoginAd from './components/LoginAd.js';
import NavBar from './components/NavBar.js';

import {Routes, Route} from "react-router-dom";
import {useEffect, useState} from 'react'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);


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
  })
  return (
    <div className="App">
       <NavBar setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} user={user} setUser={setUser} />
        <p>
        FRONT
        </p>
      <Routes>
      <Route path="/login" element={<Login
        setIsAuthenticated={setIsAuthenticated} 
        setUser={setUser}
      />}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
      {isAuthenticated? <LoginAd/> : <p>Placeholder for "You need to make and Account" </p>}
    </div>
  );
}

export default App;
