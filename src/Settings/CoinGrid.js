import React from 'react';
import styled from 'styled-components';
import {AppContext} from '../App/AppProvider';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-gap: 15px;
    margin-top: 20px;
`

const getCoinsToDisplay = (coinList, topSection, favorites) => {
    return topSection ? favorites : Object.keys(coinList).slice(0, 120);
}
const CoinGrid = ({topSection}) => {
    return (
        <AppContext.Consumer>
            {({coinList, favorites}) => 
                <CoinGridStyled>
                    {getCoinsToDisplay(coinList, topSection, favorites).map(coinKey => 
                        <CoinTile topSection={topSection} coinKey={coinKey} key={coinKey}/>
                    )}
                </CoinGridStyled>
            }
        </AppContext.Consumer>
    );
}
 
export default CoinGrid;