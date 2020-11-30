import React from 'react'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
      };
    return (
        
        <div>

            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle> Socials</FooterLinkTitle>
                                <FooterLink>Github</FooterLink>
                                <FooterLink>LinkedIn</FooterLink>
                                <FooterLink>Codepen</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                </FooterWrap>
                
            </FooterContainer>
            
        </div>
    )
}

export default Footer
