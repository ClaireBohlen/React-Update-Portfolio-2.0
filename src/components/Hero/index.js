import React, { useState } from 'react'
import Video from "../../assests/videos/video.mp4"
import {Button} from "../ButtonElement" 
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
    
    
} from "./HeroElements"

const Hero = () => {
    const [hover, setHover] = useState(false)
    
    const onHover = () =>{
        setHover(!hover)
    }
    
    
    return (

        <HeroContainer id="Hero">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type= "video/mp4"/>
            </HeroBg>
            <HeroContent>
                <HeroH1> Hey! I'm Claire.{"\n"}
                I build applications for the web.</HeroH1>
                <HeroP>Software Engineer & Web Developer</HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to = "Projects" 
                    onMouseEnter= {onHover} 
                    onMouseLeave = {onHover}
                    primary="true"
                    dark="true">
                    View my Work {hover ? <ArrowForward/>: <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
                
            </HeroContent>
            
        </HeroContainer>
    )
}

export default Hero
