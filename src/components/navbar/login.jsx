import React from 'react'
import styled from 'styled-components'

const LoginContainer = styled.div`
    display: flex;
    margin-left: 15px;
`;

const LoginButton = styled.button`
    margin-right: 60px;
    border: 0;
    outline: 0;
    padding: 8px 1em;
    color: #222;
    font-size: 14px;
    font-family: arial black;
    font-weight: 500;
    border-radius: 20px;
    background-color: transparent;
    border: 2px solid #00c9ff;
    transition: all 240ms ease-in-out;
    cursor: pointer;

    &:hover {
        color: white;
        background-color: #00c9ff;
    }
`;

 export function Login(props) {
   return( <LoginContainer>
        <LoginButton>Login</LoginButton>
    </LoginContainer>
   )
 }