import styled from "styled-components";
import { Link } from 'react-router-dom';


export const FooterContainer = styled.footer`
    background-color: #101522;
`
export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: colum;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;

`
export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 32px;
    }
`
export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`
export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: lefts;
    width: 160px;
    box-sizing: border-bos;
    color: #fff;

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }

`
export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`
export const FooterLink = styled.div`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover{
        color: #F9A826;
        transition: 0.3s ease-out;

    }
`
export const SocailMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`
export const SocialLogo = styled(Link)` 
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold; 


    

    
`
export const WebsiteRights = styled.small`
  color: #F9A826;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  margin-left: 15px;
  margin-bottom: 5px;


  
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 40px;
  &:hover{
        color: #F9A826;
        transition: 0.3s ease-out;

    }
`;

export const NavLogoImg = styled.img ` 
    margin-top: 10px;
    margin-bottom: 12px;
    height: auto;
    width: 60px;
    padding-right: 5px;
    &:hover{
        color: #F9A826;
        transition: 0.3s ease-out;

    }

   
`
