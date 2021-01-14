import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar'
import logo from '../media/get-the-spec-logo.png'

const Nav = styled.header`
    display: flex;
    align-items: center;
    height: 110px;
    border-bottom: 1px solid #4cafe1;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    z-index: 1;
`

const LogoImage = styled.img`
    width: 300px;
    padding: 0px 40px;
`;

const ErrorMessage = styled.p`
    color: red;
    font-style: italic;
    font-weight: 300;
    padding-left: 10px;
`

const NavBar = ({setProduct}) => {
    const [error, setError] = useState({
        errMessage: ""
    })

    return (
        <Nav data-testid="navbar"> 
            <LogoImage src={logo} alt="get the spec logo" />
            <SearchBar placeholder="Primary ID" setProduct={setProduct} setError={setError}/>
            {error.errMessage && <ErrorMessage>{error.errMessage}</ErrorMessage>}
        </Nav>
     );
}
 
export default NavBar;