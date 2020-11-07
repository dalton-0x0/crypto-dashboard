import React from 'react';
import styled from 'styled-components';
import {AppContext} from '../App/AppProvider';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
    margin-top: 20px;
`

const getCoinsToDisplay = (coinList) => {
    return Object.keys(coinList).slice(0, 120);
}
const CoinGrid = () => {
    return (
        <AppContext.Consumer>
            {({coinList}) => 
                <CoinGridStyled>
                    {getCoinsToDisplay(coinList).map(coinKey => 
                        <CoinTile coinKey={coinKey} key={coinKey}/>
                    )}
                </CoinGridStyled>
            }
        </AppContext.Consumer>
    );
}
 
export default CoinGrid;