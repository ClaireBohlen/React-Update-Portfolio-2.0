import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
  
  Nav1,
  Navbar1Container,
  NavItem1,
  NavLinks1,
  NavLogo1,
  NavMenu1,
  ClaireResume,
  NavBtnLinktoResume,
  NavLogoImg1,
  MobileIcon1
} from './NavbarElements';
import Logo from "../../images/Bear.svg"


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav1 scrollNav={scrollNav}>
          <Navbar1Container>
            <NavLogo1  onClick={toggleHome} to='/'>
              {/* <img src={Logo} alt="bear-logo"/> */}
              <NavLogoImg1 src={Logo} alt="bear-logo"/>
            </NavLogo1>
            <MobileIcon1 onClick={toggle}>
              <FaBars />
            </MobileIcon1>
            <NavMenu1>
              {/* <NavItem>
                <NavLinks onClcik = {toggleHome}
                  to="/"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Home
                </NavLinks>
              </NavItem> */}
              <NavItem1>
                <NavLinks1
                  to='About'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  About
                </NavLinks1>
              </NavItem1>
              <NavItem1>
                <NavLinks1
                  to='Projects'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Projects
                </NavLinks1>
              </NavItem1>
              <NavItem1>
                <NavLinks1
                  to='Connect'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Connect
                </NavLinks1>
              </NavItem1>
            </NavMenu1>
            <ClaireResume>
              <NavBtnLinktoResume to='/'>Resume</NavBtnLinktoResume>
            </ClaireResume>
          </Navbar1Container>
        </Nav1>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
