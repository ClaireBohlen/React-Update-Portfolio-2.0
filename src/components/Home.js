import React, {useState} from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import { homeObjOne } from "./AboutSection/data";
import Projects from "./Projects";
import { homeObjTwo } from "./AboutSection/data";
import Footer from "./Footer"
import Connect from "./Connect"



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
            <Connect/>
            {/* <AboutSection {...homeObjTwo} /> */}
            <Footer/>





        </>
    )
}

export default Home;
