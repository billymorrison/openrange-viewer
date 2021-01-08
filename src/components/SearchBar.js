import React, { useState } from "react";
import styled from "styled-components";

const Search = styled.form`
    display: flex;
`

const Input = styled.input`
    height: 30px;
    border: 1px solid #4d7ebd;
`

const SearchButton = styled.button`
    width: 35px;
    background-color: #4d7ebd;
    border: none;
    color: white;
    border: 1px solid #4d7ebd;
    border-left: none;

    &:hover {
        background-color: white;
        color: #4d7ebd;
        transition: 0.3s;
    }
`

const SearchBar = (props) => {
    const [value, setValue] = useState("")

    const {placeholder} = props

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(value)
    }

    return (
        <>
            <Search data-testid="search">
                <Input 
                    id="product-search" 
                    name="product-search" 
                    type="text" 
                    onChange={(e) => handleChange(e)}
                    placeholder={placeholder}
                ></Input>
                <SearchButton 
                    type="submit" 
                    onClick={(e) => handleSubmit(e)}
                >
                    <i className="fas fa-search"></i>
                </SearchButton>
            </Search>
        </>
    )
}

export default SearchBar;