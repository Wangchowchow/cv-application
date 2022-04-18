import React, { Component } from "react";
import PivotalButton from "./PivotalButton";

class ShowExperience extends Component {
    render() {
        return (
            <div className="my-experience">
                <p>Company      : {this.props.company}</p>
                <p>Position     : {this.props.position}</p>
                <p>Duration     : {this.props.duration}</p>
                <p>Description  : {this.props.description}</p>
                <PivotalButton mode={this.props.mode} value="Delete" className="delete-button" onClick={() => {
                    this.props.deleteExperience(this.props.index)
                }}></PivotalButton>
            </div>
        )
    }
}

export default ShowExperience;