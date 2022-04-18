import React, { Component } from "react";
import PivotalButton from "./PivotalButton";

class ShowEducation extends Component {
    render() {
        return (
            <div className="my-education">
                <p>School       : {this.props.school}</p>
                <p>From         : {this.props.from}</p>
                <p>To           : {this.props.to}</p>
                <p>Description  : {this.props.description}</p>
                <PivotalButton mode={this.props.mode} value="Delete" className="delete-button" onClick={() => {
                    this.props.deleteEducation(this.props.index)
                }}></PivotalButton>
            </div>
        )
    }
}

export default ShowEducation;