import React from 'react'
import { Button } from '../ButtonElement'
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
Img

} from "./AboutElements"

const AboutSection = (lightBg, imgStart, id, topLine, lightText, headline, darkText, description, buttonLabel, img, alt) => {
    return (
        <div>
            <AboutContainer lightBg={lightBg} id={id}>
                <AboutWrapper>
                    <AboutRow imgStart={imgStart}>
                        <Colum1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <SubTitle darkText ={darkText}> {description}</SubTitle>
                                <BtnWrap>
                                <Button to="Home"> {buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Colum1>
                        <Colum2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Colum2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
            
        </div>
    )
}

export default AboutSection
