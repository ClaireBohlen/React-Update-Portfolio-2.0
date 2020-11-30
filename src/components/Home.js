import React, {useState} from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutSection from "./AboutSection";



function Home (){
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }




    return (
        <div>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Hero/>
            <AboutSection/>





        </div>
    )
}

export default Home;
