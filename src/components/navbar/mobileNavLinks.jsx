import React,  {useState } from 'react'
import styled from 'styled-components'
import { Login } from './login';
import { MenuToggle } from './menuToggle';

const NavLinksContainer = styled.div`
    margin-top: 2px;
    height: 100%;
    display: flex;
    align-itmes: center;
`;

const LinksWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
    list-style: none;

    /*The below styling starts to differ from the regular navLink.jsx for the mobile menu */
    background-color: #fff;
    width: 100%;
    flex-direction: column;
    position: fixed;
    top: 65px;
    left: 0;
`;

const LinkItem = styled.li`
    display: flex;
    /*Deleted height: 100% from this spot*/
    width: 100%;
    font-family: arial black;
    padding: 0 2.6em;
    color: #222;
    font-weight: 500;
    font-size: 16px;
    /*Deleted justify-content: center and align-items: center from this spot */
    

    margin-bottom: 15px;
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
`;


/* The below styling is just to add a component that only consists of 1em of height. This adds space between my login button and the last menu link in my mobile menu. */
const Marginer = styled.div`
    height: 1em;
`;

export function MobileNavLinks(props) {

    const [isOpen, setOpen] = useState(false);

    return (
        <NavLinksContainer>
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
            {isOpen && <LinksWrapper>
                <Marginer />
                <LinkItem>
                    <Link href="/">Projects</Link>
                </LinkItem>
                <LinkItem>
                    <Link href="/about">About</Link>
                </LinkItem>
                <LinkItem>
                    <Link href="/resume">Resume</Link>
                </LinkItem>
                <Marginer />
                <Login />
            </LinksWrapper>}
        </NavLinksContainer>
    )
}