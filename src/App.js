import React from "react";
import './css/App.css';
import Home from "./components/Home";
import {HashRouter as Router, Route} from "react-router-dom"
import Resume from "./components/Resume";
//Changed Browser Router to Hash Router becuase Github pages 404
 
 

function App() {
  return (
    <>
      <Router>
          
          <Route exact path='/' component = {Home} />
          <Route exact path='/Resume' component ={Resume} />
        
      </Router>

    </>
    
  );
}

export default App;

//This appliction is a one page site with a scroll component to the next section. The resume page is a seperate page
//so that they can download or print resume (easy viewing)