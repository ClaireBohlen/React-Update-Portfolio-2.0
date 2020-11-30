import React from "react";
import './css/App.css';
import Home from "./components/Home";
import {BrowserRouter as Router} from "react-router-dom"



function App() {
  return (
    <>
      <Router>
        <Home/>
        {/* <Home/>
        <Projects/>
        <About/>
        <Connect/> */}
      </Router>

    </>
    
  );
}

export default App;
