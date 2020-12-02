import React from 'react';
import Logo from '../../images/Bear.svg'
import Modal from '../Modal'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocailMediaWrap,
    FooterLinksWrapper,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    NavLogoImg
} from "./FooterElements"

import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaCodepen,

} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
      };
    return (
        
        <div>

            <FooterContainer id="Footer">
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle> Socials</FooterLinkTitle>
                                <FooterLink to="/">Github</FooterLink>
                                <FooterLink to="/">LinkedIn</FooterLink>
                                <FooterLink to="/">Codepen</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocailMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                        <NavLogoImg src={Logo} alt="bear-logo"/>
                        </SocialLogo>
                        <WebsiteRights>Claire C. Bohlen © 2020 </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='https://www.linkedin.com/in/claire-bohlen-63a4b5119/' target='_blank' aria-label='LinkedIn'>
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href='https://github.com/ClaireBohlen' target='_blank' aria-label='Github'>
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href='https://codepen.io/clairebohlen' target='_blank' aria-label='CodePen'>
                                <FaCodepen />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                                <FaTwitter />
                            </SocialIconLink>
                            
                        </SocialIcons>

                    </SocailMediaWrap>
                </FooterWrap>
                            
            </FooterContainer>
            
        </div>
    )
}

export default Footer
