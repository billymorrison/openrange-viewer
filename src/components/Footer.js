import React from 'react';
import styled from "styled-components";

const FooterBar = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    border-top: 1px solid #4cafe1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    background-color: white;
`

const FooterText = styled.p`
    padding: 20px 40px;
    color: #333;

    & a {
        color: #4b7dbc;
        text-decoration: none;

        &:visited {
            color: #4b7dbc;
        }
    }  
`

const Footer = () => {
    return ( 
        <FooterBar>
            <FooterText>Powered by the <a href="https://pimberly.com/">Pimberly API</a></FooterText>
            <FooterText>Delivered by <a href="https://open-range.com/">Open Range</a></FooterText>
        </FooterBar>
    );
}
 
export default Footer;