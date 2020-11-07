import React, { Component } from 'react';

const cc = require('cryptocompare');
cc.setApiKey('1c9084c0df6351552bdf1389c8eba6b7747f104731de281ee1652d50454531df');

export const AppContext = React.createContext();

export class AppProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            page: 'dashboard',
            setPage: this.setPage,
            ...this.savedSettings(),
            confirmFavorites: this.confirmFavorites,
        }
    }
    componentDidMount = () => {
        this.fetchCoins();
    }
    fetchCoins = async() => {
        let coinList = (await cc.coinList()).Data;
        this.setState({coinList});
    }
    confirmFavorites = () => {
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        });
        localStorage.setItem('cryptoDash', JSON.stringify({
            test: 'hello'
        }))
    }
    savedSettings = () => {
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
        if (!cryptoDashData) {
            return {page: 'settings', firstVisit: true}
        } 
        return {}
    }
    setPage = (page) => this.setState({page})

    render(){
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}