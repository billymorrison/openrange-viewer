import React, { useState } from 'react';
import styled from "styled-components";
import AttributeTab from "./AttributeTab";
import shallowObjectEquality from "../functions/shallowObjectEquality"

const SetHeaderGrid = styled.ul`
    max-width: 800px;
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
    cursor: pointer;
`

const Attributes = (props) => {
    const [activeSet, setActiveSet] = useState({})

    const {data} = props;

    return ( 
        <>
            <SetHeaderGrid>
                {Object.keys(data).map((key) => {
                    let response;
                    if(!data[key].hidden) {
                        response = (
                            <>
                                <SetHeader
                                    onClick={() => {
                                        !shallowObjectEquality(activeSet, data[key])
                                        ? setActiveSet(data[key])
                                        : setActiveSet({})
                                    }}
                                    key={key}
                                >
                                    {key}
                                </SetHeader>
                                <AttributeTab attrSet={data[key]} activeSet={activeSet} key={`${key}Value`}/>
                            </>
                        )
                    }
                    return response;
                })
                }
            </SetHeaderGrid>
        </>
     );
}
 
export default Attributes;