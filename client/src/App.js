
import './App.css';
import Login from './components/Login.js';
import Home from './components/Home.js';
// import LoginAd from './components/LoginAd.js';
import NavBar from './components/NavBar.js';
import SignUpForm from './components/SignUpForm';

import {Routes, Route} from "react-router-dom";
import {useEffect, useState} from 'react'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);


  useEffect(() => {
    fetch("/user")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      }
    },[]);
  })

  if (!user) return <Login onLogin={setUser} />;
  return (
    <div className="App">
       <NavBar setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} user={user} setUser={setUser} />
      <Routes>
      <Route path="/login" element={<Login
        onLogin={setUser}
      />}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
      {isAuthenticated? <SignUpForm/> : <p>Welcome </p>}
    </div>
  );
}

export default App;
