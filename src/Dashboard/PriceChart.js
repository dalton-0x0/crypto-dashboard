import React from 'react';
import ReactHighcharts from 'react-highcharts';
import HighchartsConfig from './HighchartsConfig';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';

const PriceChart = () => {
    return ( 
        <AppContext.Consumer>
            {({}) => 
            <Tile>
                <ReactHighcharts config={HighchartsConfig()}/>
            </Tile>}
        </AppContext.Consumer>
     );
}
 
export default PriceChart;