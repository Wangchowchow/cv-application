import React, { Component } from "react";

class PivotalButton extends Component {
    render() {
        if (this.props.mode === "input") {
            return <input type= "button" value={this.props.value} className={this.props.className} onClick={this.props.onClick}></input>
        } else return <div></div>
    }
}

export default PivotalButton;