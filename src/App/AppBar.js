import React from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from './AppProvider';
import {color3} from '../Shared/Styles';


const Bar = styled.div`
    display: grid;
    grid-template-columns: 180px auto 100px 100px;
    margin-bottom: 40px;
`

const Logo = styled.div`
    font-size: 1.5em;
`

const ControlButtonElem = styled.div`
    cursor: pointer;
    ${props => props.active && css`
        color: ${color3};
    `}
    ${props => props.hidden && css`
        display: none;
    `}
`
const toProperCase = (lower) => {
    return lower.charAt(0).toUpperCase() + lower.substr(1);
}

const ControlButton = ({name}) => {
    return (
        <AppContext.Consumer>
            {({firstVisit, page, setPage}) => (
                <ControlButtonElem 
                active={page === name} 
                onClick={() => setPage(name)}
                hidden={firstVisit && name === 'dashboard'} >
                    {toProperCase(name)} 
                </ControlButtonElem>
            )}
        </AppContext.Consumer>
    )
}

const AppBar = () => {
    return ( 
    <Bar>
        <Logo>CryptoDash</Logo>
        <div/>
        <ControlButton name="dashboard"/>
        <ControlButton name="settings"/>
    </Bar> 
    );
}
 
export default AppBar;