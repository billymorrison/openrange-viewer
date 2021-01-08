import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ImagesBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 500px;
    width: 400px;
`

const MainImage = styled.img`
    height: 300px;
    margin: auto;
`;

const AllImages = styled.div`
    display: flex;
    justify-content: space-between;
    overflow: scroll;
    height: 90px;
`

const ProductImage = styled.img`
    height: 100%;
    width: auto;
    padding-right: 10px;
`

const Images = (props) => {
    const [mainImage, setMainImage] = useState("");

    const { images } = props

    useEffect(() => {
        setMainImage(images[0])
    }, [images])

    const renderAllImages = (imageArray) => {
        let elementArray = imageArray.map(image => {
        return <ProductImage 
            onClick={(e) => setMainImage(e.target.src)} 
            src={image} alt="product" 
            key={imageArray.indexOf(image)}
        />
        })
        return elementArray
    }
    
    return (
    <>
        <ImagesBlock>
            <MainImage src={mainImage} alt="Main product" data-testid="main-image"/>
            <AllImages>
                {
                    renderAllImages(images)
                }
            </AllImages>
        </ImagesBlock>
    </>
    );
}

export default Images;