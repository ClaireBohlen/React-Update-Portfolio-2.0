import React from 'react'
import { Button } from '../ButtonElement'
import Image from "../../images/svg-15.svg"
import {
AboutContainer,
AboutWrapper,
AboutRow,
Colum1,
Colum2,
TextWrapper,
BtnWrap,
ImgWrap,
Img,
TopLine,
Heading,
SubTitle,
SubTitle2,
IconList,
IconStyle,



} from "./AboutMeElements"


import {

AiFillHtml5,
AiFillGithub,

    
} from 'react-icons/ai'
import {
DiNodejs

    
        
} from 'react-icons/di'

import 
{SiJavascript,
    SiHeroku,
    SiAdobepremiere,
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAdobexd,
    SiCss3,
    SiJquery,
    SiMysql,
    SiReact,
    SiMongodb
} from 'react-icons/si'

const AboutSection = ({ dark, dark2, primary}) => {
    return (
        <div>
            <AboutContainer id="About-2">
                <AboutWrapper>
                    <AboutRow>
                        <Colum1>
                            <TextWrapper>
                            <TopLine>About Me:</TopLine>
                                <ul>
                                    <IconList>
                                        <IconStyle>
                                        <SiReact/></IconStyle>
                                        <IconStyle>
                                        <SiJavascript/></IconStyle>
                                        <IconStyle>
                                        <SiMongodb/></IconStyle>
                                        <IconStyle>
                                        <SiMysql/></IconStyle>
                                        <IconStyle>
                                        <SiCss3/></IconStyle>
                                        <IconStyle>
                                        <SiJquery/></IconStyle>
                                        <IconStyle>
                                        <SiHeroku/></IconStyle>
                                        <IconStyle>
                                        <DiNodejs/></IconStyle>
                                        <IconStyle>
                                        <AiFillHtml5/></IconStyle>
                                        <IconStyle>
                                        <AiFillGithub/></IconStyle>
                                        <IconStyle>
                                        <SiAdobeillustrator/></IconStyle>
                                        <IconStyle>
                                        <SiAdobephotoshop/></IconStyle>
                                        <IconStyle>
                                        <SiAdobexd/></IconStyle>
                                        <IconStyle>
                                        <SiAdobepremiere/></IconStyle>
                                        <IconStyle>
                                        <SiAdobexd/></IconStyle>
                                        

                                        {/* <AiFillHtml5 style={{color: 'black'}}/> */}
                                    
                                    </IconList>
                                </ul>
                               
                                <SubTitle> I am a Full Stack Engineer & Developer with a background in Business & Sales.  I recently earned a certificate in Full Stack Development from the University of Denver and I have a bachelor of Science in Business & Music from the University of Colorado.</SubTitle>
                                <SubTitle> I’m an innovative problem solver that is passionate about developing apps, with a focus on mobile-first design and development. My background in Business Development has prepared me to approach problems creativity and work well with teams. </SubTitle>
                                <SubTitle> With each project, I aim to understand how to best engage users for an impactful user experience. I applied aspects of UX and agile development in a recent project where I worked in a team of 5 to develop a single-page MERN application.</SubTitle>
                                
                                <Heading>I’m eager to leverage my skills in the future as part of a fast-paced, quality-driven team. </Heading>
                                <BtnWrap>
                                <Button
                                to="Footer"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                primary={primary ? 0 : 1}
                                dark={dark ? 0 : 1}
                                dark2={dark2 ? 1 : 0}
                                 > Connect With Me</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Colum1>
                        <Colum2>
                        <SubTitle2> When I’m not designing or developing, I enjoy helping local musicians grow their online presence on social media. Photography, photoshop, video editing & illustrator are some of the skills I put to use when working with musicians. In my free time, I enjoy playing the piano, snowboarding, or reading up on the latest trends in the tech world.</SubTitle2>
                            <ImgWrap>
                            
                                
                                <Img src={Image}/>
                            </ImgWrap>

                        </Colum2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
            
        </div>
    )
}

export default AboutSection