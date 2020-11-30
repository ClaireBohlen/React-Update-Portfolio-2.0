import React, {useState} from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import { homeObjOne } from "./AboutSection/data";
import Projects from "./Projects";
import { homeObjTwo } from "./AboutSection/data";



function Home (){
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };




    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Hero/>
            <AboutSection {...homeObjOne}/>
            <Projects />
            <AboutSection {...homeObjTwo} />





        </>
    )
}

export default Home;
