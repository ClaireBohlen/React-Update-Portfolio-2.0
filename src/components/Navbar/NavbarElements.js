import styled from "styled-components"
import {Link as LinkRouter} from "react-router-dom"
import {Link as LinkS} from "react-scroll"


export const Nav1 = styled.nav `
    background: #000;
    height: 80px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`
export const Navbar1Container = styled.div `
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width:1100px;
`

export const NavLogo1 = styled(LinkRouter) `
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon1 = styled.div `
     display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor:pointer;
        color: white;

}

`
export const NavMenu1 = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 20px;
    padding: 5px;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavItem1 = styled.li `
    height: 80px;
`

export const NavLinks1 = styled(LinkS)`
    color: #fff;
    display: felx;
    align-items: center;
    text-decoration: none;
    padding: 01rem;
    height: 100%;
    cursor: pointer;
        
    &.active {
        border-bottom: 3px solid #F9A826;

    }
`
export const ClaireResume = styled.div `
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavBtnLinktoResume = styled(LinkRouter)`
    border-radius: 50px;
    background: #F9A826;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;

    }
`
export const NavLogoImg1 = styled.img`
    margin-top: 10px;
    margin-bottom: 12px;
    height: auto;
    width: 50px;

`