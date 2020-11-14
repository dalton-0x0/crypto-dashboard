import React from 'react';
import ReactLoading from 'react-loading';
import {AppContext} from '../App/AppProvider';

const Content= (props) => {
    return (  
        <AppContext.Consumer>
            {({coinList, prices, firstVisit}) => {
                if (!coinList) {
                    return <div><ReactLoading type='bars' height={'10%'} width={'20%'} color={'#C0C0C0'} />Loading Coins</div>;
                }
                if(!prices && !firstVisit) {
                    return <div><ReactLoading type='bars' height={'10%'} width={'20%'} color={'#C0C0C0'} />Loading Prices</div>
                }
            return <div>{props.children}</div>
            } }
        </AppContext.Consumer>
    );
}
 
export default Content;