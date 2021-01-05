import React, { useState } from "react";

const SearchBar = () => {
    const [value, setValue] = useState("")

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(value)
    }

    return (
        <>
            <form>
                <input id="product-search" name="product-search" type="text" onChange={(e) => handleChange(e)}></input>
                <button type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
            </form>
        </>
    )
}

export default SearchBar;