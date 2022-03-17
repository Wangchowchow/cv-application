import React, { Component } from "react";
import AboutMe from "./components/AboutMe";

class App extends Component {
    constructor() {
        super();
        
    }

    render(){
        return (
            <div className="app">
                <h1>My Amazing CV</h1>
                <input type="button"></input>
                <AboutMe></AboutMe>
            </div>
        )
    }
}

export default App;