import React, { Component } from "react";
import ToggleEdit from "./ToggleEdit";

class AboutMe extends Component {
    render() {
        return (
            <div className="about-me-container">
                <h2>About Me</h2>
                <ToggleEdit value="Name" mode={this.props.mode}></ToggleEdit>
                <ToggleEdit value="Address" mode={this.props.mode}></ToggleEdit>
                <ToggleEdit value="Email" mode={this.props.mode}></ToggleEdit>
                <ToggleEdit value="Phone Number" mode={this.props.mode}></ToggleEdit>
            </div>
        )
    }
}

export default AboutMe;