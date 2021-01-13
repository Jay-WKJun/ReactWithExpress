import React, { Component } from 'react';
import TopSector from './TopSector/topSector';
import Header from './header/header';
import "./App.scss";

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
            <div className="contens">
                <div className="main-page">
                    <Header></Header>
                    <TopSector></TopSector>
                </div>
            </div>
        )
    }
}

export default App;