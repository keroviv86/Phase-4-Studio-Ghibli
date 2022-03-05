
import './App.css';
import Login from './Login.js';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1> Hello World! </h1>
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>

    </div>
  );
}

export default App;
