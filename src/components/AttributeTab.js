import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import shallowObjectEquality from "../functions/shallowObjectEquality"

const AttributeDisplay = styled.div`
    display: none;

    ${( {active} ) => active === true && `
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid #5685c0;
    box-sizing: border-box;
    
    && p {
        padding: 0 20px;
        display: block;
        width: 100%;
    }
  `}
`

const AttributeTab = (props) => {
    const [isActive, setIsActive] = useState(false)
    const { attrSet, activeSet } = props;
    
    useEffect(() => {
        setIsActive(shallowObjectEquality(attrSet, activeSet));
        }, [attrSet, activeSet]);

    const printAttributes = (attributesObject) => {
        let result = [];
        for(const key in attributesObject){
            result.push(<p key={key}>{ `${key}: ${attributesObject[key]}` }</p>)
        }
        return result
    }

    return ( 
        <AttributeDisplay active={isActive}>
            {
                printAttributes(attrSet)
            }
        </AttributeDisplay>
     );
}
 
export default AttributeTab;