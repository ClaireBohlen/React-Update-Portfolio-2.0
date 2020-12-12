import React from 'react'
import { Button } from '../ButtonElement'
import Image from "../../images/svg-7.svg"
import {
AboutContainer,
AboutWrapper,
AboutRow,
Colum1,
Colum2,
TextWrapper,
TopLine,
Heading,
SubTitle,
BtnWrap,
ImgWrap,
Img,

} from "./ConnectElements"


const AboutSection = ({ dark, dark2, primary}) => {
    return (
        <div>
            <AboutContainer id="connect-2">
                <AboutWrapper>
                    <AboutRow>
                        <Colum1>
                            <TextWrapper>
                                <TopLine>Hello</TopLine>
                                <Heading>Connect</Heading>
                                <SubTitle> Contact Form</SubTitle>
                                <BtnWrap>
                                <Button
                                to="socials-2"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                 > Text for Button</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Colum1>
                        <Colum2>
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