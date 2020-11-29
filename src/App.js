import './css/App.css';
import About from "./components/About";
import Connect from "./components/Connect";
import Home from "./components/Home";
import Projects from "./components/Projects";
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
