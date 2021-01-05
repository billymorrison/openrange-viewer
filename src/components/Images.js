import React from "react";
import styled from "styled-components";

const ImagesBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 400px;
    width: 400px;
`

const MainImage = styled.img`
    height: 75%;
`;

const AllImages = styled.div`
    display: flex;
    overflow: scroll;
    height: 19%;
`

const ProductImage = styled.img`
    height: 100%;
    width: auto;
    padding-right: 10px;
`

const Images = (props) => {
    const { images } = props

    const renderOtherImages = (imageArray) => {
        let i;
        let elementArray = []
        for(i = 0; i < imageArray.length; i++) {
            elementArray.push(<ProductImage src={imageArray[i]} alt="product"/>)
        }
        return elementArray
    }
    
    return (
    <>
        <ImagesBlock>
            <MainImage src={images[0]} alt="Main product" data-testid="main-image"/>
            <AllImages>
                {
                    renderOtherImages(images)
                }
            </AllImages>
        </ImagesBlock>
    </>
    );
}

export default Images;