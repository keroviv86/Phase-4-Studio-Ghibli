import React from 'react'

import { NavLink } from 'react-router-dom'

function NavBar({isAuthenticated, setIsAuthenticated, user, setUser}) {

    function logout() {
        fetch('/logout',{
            method:'DELETE'
        })
        .then(()=>{
            setIsAuthenticated(false)
            setUser(null)
        })
    }

  return (
    <div>
        <nav className="nav">
            <a href="#/nav">
                <NavLink to="/sign-up" exact >
                    Sign-Up
                </NavLink>
            </a>{' '} |
            <a href="#/nav">
               {user? <li onClick={logout}> Logout </li> : 
               <NavLink to="/login" exact>
                    Login
                </NavLink>} 
            </a>{' '} |
            <a href="#/nav">
                <NavLink to="/home" exact>
                    Home
                </NavLink>
            </a>
            {isAuthenticated?             
            <li>
                <NavLink to="/Films" exact>
                   Film
                </NavLink>
            </li>:
            <p> </p>}
        </nav>
    </div>
  )
}

export default NavBar;