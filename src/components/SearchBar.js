import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import createProductObject from "../functions/createProductObject"

const {REACT_APP_CHANNEL_TOKEN, REACT_APP_FEED_TOKEN, REACT_APP_BASE_URL} = process.env;

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

const getProduct = async (primaryId) => {
    let error = {}
    const attributes = await axios
        .get(`${REACT_APP_BASE_URL}${primaryId}?access_token=${REACT_APP_CHANNEL_TOKEN}`, {headers: {}})
        .then(response => response)
        .catch(err => error.errMessage = err.response.data.error.message)
    const attributeSets = await axios
        .get(`${REACT_APP_BASE_URL}${primaryId}/attribute-sets?access_token=${REACT_APP_FEED_TOKEN}`, {headers: {}})
        .then(response => response)
        .catch(err => error.errMessage = err.response.data.error.message)
    return error.errMessage 
    ? error
    : createProductObject(attributes.data, attributeSets)
}

const SearchBar = (props) => {
    const [value, setValue] = useState("")
    const {placeholder, setProduct, setError} = props

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        let response;
        value && (response = await getProduct(value))
        if(!response){
            setError({errMessage: "Please enter a Primary ID"})
        } else if (response && response.errMessage) {
            setError(response)
        } else {
            setError({})
            setProduct(response)
        }
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