import React, { Component } from 'react';

class App extends Component {
    state = {
        hi: "Hello From React~~~"
    }

    componentDidMount(){
        fetch("api")
        .then((res)=>res.json())
        .then((JSONRES) => console.log(JSONRES));
    }

    render() {
        return (
            <div>
                <h1>Hello World!!</h1>
                <h1>{this.state.hi}</h1>
            </div>
        )
    }
}

export default App;