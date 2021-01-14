import React from 'react';
import Images from "./Images";
import styled from "styled-components";
import Attributes from "./Attributes"

const MainProductArea = styled.main`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 50px;
    color: #333;
    position: absolute;
    top: 100px;
    height: 800px;

    & h1 {
        color: #4d7ebd;
    }
`

const ProductDescription = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 850px;
    justify-content: start;
    height: 99%;
    overflow-y: scroll;
    overflow-x: auto;
    margin-bottom: 90px;
    color: #333;
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
                <h1>{Base["Model Name"]}</h1>
                <PrimaryId>Primary ID: {product.primaryId}</PrimaryId>
                <p><b>Manufacturer: {Base["Brand"]}</b></p>
                <p><b>Manufacturer Part Number: {Base["PartNo"]}</b></p>
                <p>{Base["Marketing"]}</p>
                <Attributes data={product.data} />
            </ProductDescription>
        </MainProductArea>
     );
}
 
export default MainProduct;