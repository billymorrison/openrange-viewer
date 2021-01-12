import React, { useState } from 'react';
import styled from "styled-components";
import AttributeTab from "./AttributeTab";

const SetHeaderRow = styled.ul`
    width: 500px;
    display: flex;
    flex-direction: column;
    padding: 0;
    border: 1px solid #5685c0;
    box-sizing: border-box;
`

const SetHeader = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-color: #4cafe1;
    color: white;
    font-weight: bold;
    padding: 10px 0;
    width: 100%;
    border: 1px solid #5685c0;
    box-sizing: border-box;
`

const Attributes = (props) => {
    const [activeSet, setActiveSet] = useState({
        "Feature 1": "Eye Comfort Certified",
        "Feature 2": "Eye Caring"
    })

    const {data} = props;

    return ( 
        <>
            <SetHeaderRow>
                {Object.keys(data).map((key) => {
                    if(!data[key].hidden) {
                        return (
                            <>
                                <SetHeader>{key}</SetHeader>
                                <AttributeTab attrSet={data[key]} activeSet={activeSet}/>
                            </>
                        )
                    }
                })
                }
            </SetHeaderRow>
        </>
     );
}
 
export default Attributes;