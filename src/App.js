import React, { Component } from "react";
import AboutMe from "./components/AboutMe";
import MyEducation from "./components/MyEducation";

class App extends Component {
    constructor() {
        super();
        this.state = {
            mode: "input",
            button: "Mode: Input",
            education: {
                school: "",
                from: "",
                to: "",
                description: "",
                edit: false,
                data: []
            }
        }
        this.getEducation = this.getEducation.bind(this);
    }

    getEducation = (e) => {
        this.setState({ education: e});
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
                <MyEducation getEducation={this.getEducation} education={this.state.education} mode={this.state.mode}></MyEducation>
            </div>
        )
    }
}

export default App;