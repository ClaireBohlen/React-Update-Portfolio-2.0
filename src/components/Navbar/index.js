import React, {useState, useEffect } from 'react'
import  {FaBars} from "react-icons/fa"
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from "./NavbarElements"

const Navbar = ({toggle}) => {
    return (
        <div>
            <Nav> 
                <NavbarContainer>
                    <NavLogo to="/"> Bear </NavLogo>
                    <MobileIcon onClick = {toggle}> 
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to ="Home">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to ="About">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to ="Projects">Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to ="Connect">Connect</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to = "/resume"> Resume</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            
        </div>
    )
}

export default Navbar
