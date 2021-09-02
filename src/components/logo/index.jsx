import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'


// Using the styled-components, I have created divs and included the CSS/Styling for my LogoWrapper div, LogoImg div, and LogoText h2 in my jsx file.
// I also separated my logo in its own folder in components.


const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    
`;

const LogoImg = styled.div`
    width: 55px;
    height: 55px;
    transition: all .3s ease-in-out;

    img {
        width: 100%;
        height: 100%;
    }

    &:hover {
        transform: scale(1.2) rotate(5deg);
        
    }
`;

const LogoText = styled.h2`
    
    font-size: 16px;
    font-family: arial black;
    margin: 0;
    margin-top: 5.5px;
    margin-left: 4px;
    color: #222;
    font-weight: 500;
`;

export function Logo(props) {
    return <LogoWrapper>
        <LogoImg><Link to="/"><img src='/images/logo.png' alt="Coding With James Logo"></img></Link></LogoImg>
        <LogoText>Coding With James</LogoText>
    </LogoWrapper>
}


