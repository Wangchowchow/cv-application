import React, { Component } from "react";
import ShowEducation from "./ShowEducation";
import PivotalButton from "./PivotalButton";

class MyEducation extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.education;
        this.deleteEducation = this.deleteEducation.bind(this);
        this.editState = this.editState.bind(this);
    }

    deleteEducation = (index) => {
        this.setState((previousState) => {
            let previousData = previousState.data.map(data => data);
            previousData.splice(index, 1);
            return {
                data: previousData
            }
        })
        this.props.getEducation(this.state);
    }

    updateSchool = (e) => {
        this.setState({ school: e.target.value });
    }
    updateFrom = (e) => {
        this.setState({ from: e.target.value });
    }
    updateTo = (e) => {
        this.setState({ to: e.target.value });
    }
    updateDescription = (e) => {
        this.setState({ description: e.target.value });
    }

    addEducation = () => {
        return (
            <div className="add-education">
                <p>School       : <input type="text" onChange={this.updateSchool} value={this.state.school}></input></p>
                <p>From         : <input type="date" onChange={this.updateFrom} value={this.state.from}></input></p>
                <p>To           : <input type="date" onChange={this.updateTo} value={this.state.to}></input></p>
                <p>Description  : <input type="text" onChange={this.updateDescription} value={this.state.description}></input></p>
                <input type="button" value="Submit" onClick={this.submitEducation} className="submit-button"></input>
            </div>
        )
    }

    submitEducation = () => {
        let data = {
            school: this.state.school,
            from: this.state.from,
            to: this.state.to,
            description: this.state.description
        }
        this.setState((previousState) => {
            let previousData = previousState.data.map(e => e)
            previousData.push(data);
            return {
                data: previousData,
                edit: false
            }
        })
        this.props.getEducation(this.state);
    }

    showMyEducation = () => {
        let pivotalButton = <PivotalButton mode={this.props.mode} value="Add" onClick={this.editState} className="add-button"></PivotalButton>
        if (this.state.data.length === 0) {
            return pivotalButton;
        } else {
            let data = [];
            let item = this.state;
            for (let i = 0; i < this.state.data.length; i++) {
                data.push(<ShowEducation key={i} index={i} mode={this.props.mode} school={item.data[i].school} from={item.data[i].from} to={item.data[i].to} description={item.data[i].description} deleteEducation={this.deleteEducation}></ShowEducation>)
            }
            return <div className="my-education">
                {data}
                {pivotalButton}
            </div>
        }
    }

    editState = () => {
        this.setState({ edit: true })
    }

    render() {
        if (this.state.edit === false) {
            return (
                <div className="my-education-container">
                    <h2>My Education</h2>
                    {this.showMyEducation()}
                </div>
            )
        } else if (this.state.edit === true) {
            return (
                <div className="my-education-container">
                    <h2>My Education</h2>
                    {this.addEducation()}
                </div>
            )
        }
    }   
}

export default MyEducation;