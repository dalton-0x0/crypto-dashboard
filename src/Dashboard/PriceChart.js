import React from 'react';
import ReactHighcharts from 'react-highcharts';
import ReactLoading from 'react-loading';
import HighchartsConfig from './HighchartsConfig';
import PriceChartStyle from './PriceChartStyle';
import ChartSelectStyle from './ChartSelectStyle';
import {HighchartsTheme} from './HighchartsTheme';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';

ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

const PriceChart = () => {
    return ( 
        <AppContext.Consumer>
            {({historical, changeChartSelect}) => 
            <PriceChartStyle>
                <Tile>
                    <ChartSelectStyle 
                    defaultValue="months"
                    onChange={e => changeChartSelect(e.target.value)}>
                        <option value="days">Days</option>
                        <option value="weeks">Weeks</option>
                        <option value="months">Months</option>
                    </ChartSelectStyle>
                    {historical ? 
                    <ReactHighcharts config={HighchartsConfig(historical)}/>
                    : <ReactLoading type='bars' height={'40%'} width={'40%'} color={'#C0C0C0'} />
                    }
                </Tile>
            </PriceChartStyle>
            }
        </AppContext.Consumer>
     );
}
 
export default PriceChart;