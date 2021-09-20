import React from 'react'
import styled from 'styled-components'

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
`;

const LinkItem = styled.li`
    display: flex;
    height: 100%;
    font-family: arial black;
    padding: 0 2.6em;
    color: #222;
    font-weight: 500;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    border-top: 2px solid transparent; /*I added a transparent border here with the same width as the hover border so that the text doesn't get pushed down when hovering. */
    transition: all 200ms ease-in-out;

    &:hover {
        border-top: 2px solid #00c9ff;
    }
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
`;

export function NavLinks(props) {
    return (
        <NavLinksContainer>
            <LinksWrapper>
                <LinkItem>
                <Link href="/">Resume</Link>
                </LinkItem>
                <LinkItem>
                    <Link href="/about">About</Link>
                </LinkItem>
                <LinkItem>
                    <Link href="/projects">Projects</Link>
                </LinkItem>
            </LinksWrapper>
        </NavLinksContainer>
    )
}