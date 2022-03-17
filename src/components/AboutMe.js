import React, { Component } from "react";
import ToggleEdit from "./ToggleEdit";

class AboutMe extends Component {
    render() {
        return (
            <div className="about-me-container">
                <h2>About Me</h2>
                <ToggleEdit value="First Name"></ToggleEdit>
                <ToggleEdit value="Last Name"></ToggleEdit>
                <ToggleEdit value="Email"></ToggleEdit>
                <ToggleEdit value="Address"></ToggleEdit>
            </div>
        )
    }
}

export default AboutMe;