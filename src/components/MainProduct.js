import React from 'react';
import Images from "./Images";
import styled from "styled-components";

const MainProductArea = styled.main`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 50px;
    color: #333;
`

const ProductDescription = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: start;
`

const Title = styled.h1`
    font-weight: 200px;
    color: #4d7ebd;
`

const PrimaryId = styled.p`
    font-size: 12px;
    color: gray;
    color: #4cafe1;
`

const MainProduct = (props) => {
    const { product } = props;

    return ( 
        <MainProductArea>
            { product.Images && <Images images={product.Images}/>}
            <ProductDescription>
                <Title>{product["Model Name"]}</Title>
                <PrimaryId>Primary ID: {product["Primary ID"]}</PrimaryId>
                <p><b>Manufacturer: {product["Manufacturer"]}</b></p>
                <p><b>Manufacturer Part Number: {product["PartNo"]}</b></p>
                <p>{product["Marketing"]}</p>
            </ProductDescription>
        </MainProductArea>
     );
}
 
export default MainProduct;