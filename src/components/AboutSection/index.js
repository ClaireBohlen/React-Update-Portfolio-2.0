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

} from "./AboutElements"


const AboutSection = ({lightBg, imgStart, id, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, buttonTarget, dark, dark2, primary}) => {
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
                                <Button
                                 to={buttonTarget}
                                 smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                 > {buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Colum1>
                        <Colum2>
                            <ImgWrap>
                                <Img src={Image} alt={alt}/>
                            </ImgWrap>
                        </Colum2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
            
        </div>
    )
}

export default AboutSection
