import React from 'react'
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { Logo } from '../logo';
import { DeviceSize } from '../responsive';
import { Login } from './login';
import { NavLinks } from './navLinks';
import { MobileNavLinks } from './mobileNavLinks';


// Using the styled-components, I have created divs and included the CSS/Styling for my NavbarContainer div, LeftSection div, and MiddleSection div and RightSection div in my jsx file.
// I also separated the Navbar elements in their own folder in components. This file contains the main container that is then split up into three sections. The insides of these 3 
// sections are created and styled in navLink.jsx inside of this folder as well.


const NavbarContainer = styled.div`
    width: auto;
    height: 60px;
    box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
    display: flex;
    align-items: center;
    padding: 0 1.5em;
    margin-bottom: 27px;
`;

const LeftSection = styled.div`
    display: flex;

`;

const MiddleSection = styled.div`
    display: flex;
    flex: 2;
    height: 100%;
    justify-content: center;
`;

const RightSection = styled.div`
    display: flex;
`;

export function NavBar(props) {

    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })

    return <NavbarContainer>
        <LeftSection>
            <Logo />
        </LeftSection>
        <MiddleSection>
            {!isMobile && <NavLinks />}
        </MiddleSection>
        <RightSection>
            {!isMobile && <Login />}
            {isMobile && <MobileNavLinks />}
        </RightSection>
    </NavbarContainer>
}