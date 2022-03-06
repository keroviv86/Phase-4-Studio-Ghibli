import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";


function Login({ onLogin, name, setName, password, setPassword }) {
  const [showLogin, setShowLogin] = useState(true);
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");

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

// const Logo = styled.h1`
//   font-family: "Permanent Marker", cursive;
//   font-size: 3rem;
//   color: deeppink;
//   margin: 8px 0 16px;
// `;

// const Wrapper = styled.section`
//   max-width: 500px;
//   margin: 40px auto;
//   padding: 16px;
// `;

// const Divider = styled.hr`
//   border: none;
//   border-bottom: 1px solid #ccc;
//   margin: 16px 0;
// `;

export default Login;