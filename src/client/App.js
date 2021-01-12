import React, { Component } from 'react';
import TopSector from './TopSector/topSector';
import Header from './header/header';

class App extends Component {
    state = {
        hi: "Hello From React~~~"
    }

    componentDidMount(){
        /*
        fetch("api")
        .then((res)=>res.json())
        .then((JSONRES) => console.log(JSONRES));
        */
    }

    render() {
        return (
            <div class="contens">
                <div class="main-page">
                    <Header></Header>
                    <TopSector></TopSector>
                </div>
            </div>
        )
    }
}

export default App;