import React, { Component } from "react";
import PivotalButton from "./PivotalButton";

class ToggleEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            edit: false,
        }
    }

    render() {
        if (this.state.edit === true) {
            return <div className="about-me">
                <input type="text" value={this.state.value} onChange={this.updateValue}></input>
                <input type="button" value="Save" onClick={this.editState} className="save-button"></input>
            </div>
        } else if (this.state.edit === false) {
            return <div className="about-me">
                <p>{this.state.value}</p>
                <PivotalButton mode={this.props.mode} value="Edit" className="edit-button" onClick={this.editState}></PivotalButton>
            </div>
        }
    }

    updateValue = (e) => {
        this.setState({ value: e.target.value })
    }

    editState = () => {
        this.setState(() => {
            if (this.state.edit === false) {
                return { edit: true }
            } else if (this.state.edit ===true) {
                return { edit: false }
            }
        })
    }
}

export default ToggleEdit;