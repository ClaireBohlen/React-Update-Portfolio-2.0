import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SideBtnWrap,
    SidebarRoutes,
    SidebarLink
} from "./SideBarElements"

const SideBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen = {isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="Home" onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to="About" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="Projects" onClick={toggle}>Projects</SidebarLink>
                    <SidebarLink to="Connect" onClick={toggle}>Connent</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoutes to ="/resume">Resume</SidebarRoutes>
                </SideBtnWrap>
            </SidebarWrapper>

            
        </SidebarContainer>
    )
}

export default SideBar
