import React from 'react';
import ReactHighcharts from 'react-highcharts';
import ReactLoading from 'react-loading';
import HighchartsConfig from './HighchartsConfig';
import {HighchartsTheme} from './HighchartsTheme';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';

ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

const PriceChart = () => {
    return ( 
        <AppContext.Consumer>
            {({historical}) => 
            <Tile>
                {historical ? 
                <ReactHighcharts config={HighchartsConfig(historical)}/>
                : <ReactLoading type='bars' height={'40%'} width={'40%'} color={'#C0C0C0'} />
                }
            </Tile>}
        </AppContext.Consumer>
     );
}
 
export default PriceChart;