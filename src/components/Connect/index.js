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
BtnWrap,
ImgWrap,
Img,

} from "./ConnectElements"
import MyForm from '../Form'


const AboutSection = ({ dark, dark2, primary}) => {
    return (
        <div>
            <AboutContainer id="connect-2">
                <AboutWrapper>
                    <AboutRow>
                        <Colum1>
                            <TextWrapper>
                               <MyForm/>
                                {/* <BtnWrap>
                                <Button
                                to="Footer"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                 > Socials</Button>
                                </BtnWrap> */}
                            </TextWrapper>
                        </Colum1>
                        <Colum2>
                            <ImgWrap>
                                <Img src={Image}/>
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
                                 > Connect with me on Social Media</Button>
                                </BtnWrap>
                            </ImgWrap>

                        </Colum2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
            
        </div>
    )
}

export default AboutSection