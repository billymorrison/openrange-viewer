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
    const { Base } = product.data
    return ( 
        <MainProductArea>
            { product.data.Media.Images && <Images images={product.data.Media.Images}/>}
            <ProductDescription>
                <Title>{Base["Model Name"]}</Title>
                <PrimaryId>Primary ID: {product.primaryId}</PrimaryId>
                <p><b>Manufacturer: {Base["Brand"]}</b></p>
                <p><b>Manufacturer Part Number: {Base["PartNo"]}</b></p>
                <p>{Base["Marketing"]}</p>
            </ProductDescription>
        </MainProductArea>
     );
}
 
export default MainProduct;