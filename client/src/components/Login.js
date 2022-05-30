import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";


function Login({ onLogin, name, setName, password, setPassword, setIsAuthenticated }) {
  const [showLogin, setShowLogin] = useState(true);


  return (
    <div>

      {showLogin ? (
        <>
          <LoginForm 
          onLogin={onLogin}
          name={name}
          setName={setName}
          password={password}
          setPassword={setPassword}
          setIsAuthenticated={setIsAuthenticated}
          />
  
          <p>
            Don't have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm 
          onLogin={onLogin}
          name={name}
          setName={setName}
          password={password}
          setPassword={setPassword} 
          />
         
          <p>
            Already have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  );
}


export default Login;