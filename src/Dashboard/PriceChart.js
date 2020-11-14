import React from 'react';
import ReactHighcharts from 'react-highcharts';
import {HighchartsConfig} from './HighchartsConfig';
import {HighchartsTheme} from './HighchartsTheme';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';

ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

const PriceChart = () => {
    return ( 
        <AppContext.Consumer>
            {({sym}) => 
            <Tile>
                <ReactHighcharts config={HighchartsConfig}/>
            </Tile>}
        </AppContext.Consumer>
     );
}
 
export default PriceChart;