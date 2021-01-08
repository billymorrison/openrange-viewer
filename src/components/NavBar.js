import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar'
import logo from '../media/get-the-spec-logo.png'

const Nav = styled.header`
    display: flex;
    align-items: center;
    height: 110px;
    border-bottom: 1px solid #4cafe1;
`

const LogoImage = styled.img`
    width: 300px;
    padding: 0px 40px;
`;

const NavBar = () => {
    return (
        <Nav data-testid="navbar"> 
            <LogoImage src={logo} alt="get the spec logo" />
            <SearchBar placeholder="Primary ID" />
        </Nav>
     );
}
 
export default NavBar;