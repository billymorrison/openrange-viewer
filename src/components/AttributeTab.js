import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import shallowObjectEquality from "../functions/shallowObjectEquality"

const AttributeDisplay = styled.div`
    width: 100%;
    background-color: yellow;
    height: 40px;

    ${( active ) => active === true && `
    background-color: blue !important;
  `}
`

const AttributeTab = (props) => {
    const [isActive, setIsActive] = useState(false)
    const { attrSet, activeSet } = props;
    
    useEffect(() => {
        setIsActive(shallowObjectEquality(attrSet, activeSet));
        }, [attrSet, activeSet]);
    console.log(isActive)
    return ( 
        <AttributeDisplay active={isActive}/>
     );
}
 
export default AttributeTab;