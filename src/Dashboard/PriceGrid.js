import React from 'react';
import styled from 'styled-components';
import {AppContext} from '../App/AppProvider';
import PriceTileComponent from './PriceTile';

const PriceGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
    margin-top: 40px;
`

const PriceGrid = () => {
    return ( 
        <AppContext.Consumer>
            {({prices}) => (
                <PriceGridStyled>
                    {prices.map((price, index) => <PriceTileComponent index={index} price={price} key={index}/>)}
                </PriceGridStyled>
            )}
        </AppContext.Consumer>
     );
}
 
export default PriceGrid;