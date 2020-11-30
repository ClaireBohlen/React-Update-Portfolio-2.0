import React from 'react'
import { Button } from 'react-scroll'
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
BrnWrap,
ImgWrap,
Img
} from "./AboutElements"

const AboutSection = () => {
    return (
        <div>
            <AboutContainer>
                <AboutWrapper>
                    <AboutRow>
                        <Colum1>
                            <TextWrapper>
                                <TopLine></TopLine>
                                <Heading>Heading</Heading>
                                <SubTitle> SubTitle</SubTitle>
                                <BtnWrap>
                                    <Button to="Home"/>
                                </BtnWrap>
                            </TextWrapper>
                        </Colum1>
                        <Colum2>
                            <ImgWrap>
                                <Img/>
                            </ImgWrap>
                        </Colum2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
            
        </div>
    )
}

export default AboutSection
