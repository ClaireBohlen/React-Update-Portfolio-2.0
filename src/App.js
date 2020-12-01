import React from "react";
import './css/App.css';
import Home from "./components/Home";
import {HashRouter as Router, Route} from "react-router-dom"
//Changed Browser Router to Hash Router becuase Github pages 404

 

function App() {
  return (
    <>
      <Router>
          
          <Route exact path='/' component = {Home} />
        
      </Router>

    </>
    
  );
}

export default App;
