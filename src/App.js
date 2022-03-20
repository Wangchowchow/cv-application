import React, { Component } from "react";
import AboutMe from "./components/AboutMe";

class App extends Component {
    constructor() {
        super();
        this.state = {
            mode: "input",
            button: "Mode: Input"
        }
    }

    changeMode = () => {
        if (this.state.mode === "input") {
            this.setState({
                mode: "preview",
                button: "Mode: Preview"
            })
        } else {
            this.setState({
                mode: "input",
                button: "Mode: Input"
            })
        }
    }

    render(){
        return (
            <div className="app">
                <h1>My Amazing CV</h1>
                <input type="button" className="preview-button" value={this.state.button} onClick={this.changeMode}></input>
                <AboutMe mode={this.state.mode}></AboutMe>
            </div>
        )
    }
}

export default App;