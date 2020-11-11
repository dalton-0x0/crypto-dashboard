import React from 'react';
import {AppContext} from '../App/AppProvider';

const Content= (props) => {
    return (  
        <AppContext.Consumer>
            {({coinList, prices, firstVisit}) => {
                if (!coinList) {
                    return <div>Loading Coins...</div>;
                }
                if(!prices && !firstVisit) {
                    return <div>Loading prices...</div>
                }
            return <div>{props.children}</div>
            } }
        </AppContext.Consumer>
    );
}
 
export default Content;