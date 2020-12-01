import React from 'react';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocailMediaWrap,
    FooterLinksWrapper
} from "./FooterElements"

const Footer = () => {
    // const toggleHome = () => {
    //     scroll.scrollToTop();
    //   };
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

                    </SocailMediaWrap>
                </FooterWrap>
                
            </FooterContainer>
            
        </div>
    )
}

export default Footer
