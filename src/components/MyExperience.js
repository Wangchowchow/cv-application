import React, { Component } from "react";
import ShowExperience from "./ShowExperience";
import PivotalButton from "./PivotalButton";

class MyExperience extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.experience;
        this.deleteExperience = this.deleteExperience.bind(this);
        this.editState = this.editState.bind(this);
    }

    deleteExperience = (index) => {
        this.setState((previousState) => {
            let previousData = previousState.data.map(data => data);
            previousData.splice(index, 1);
            return {
                data: previousData
            }
        })
        this.props.getExperience(this.state);
    }

    updateCompany = (e) => {
        this.setState({ company: e.target.value});
    }
    updatePosition = (e) => {
        this.setState({ position: e.target.value});
    }
    updateDuration = (e) => {
        this.setState({ duration: e.target.value});
    }
    updateDescription = (e) => {
        this.setState({ description: e.target.value});
    }

    addExperience = () => {
        return (
            <div className="add-experience">
                <p>Company      : <input type="text" onChange={this.updateCompany} value={this.state.company}></input></p>
                <p>Position     : <input type="text" onChange={this.updatePosition} value={this.state.position}></input></p>
                <p>Duration     : <input type="text" onChange={this.updateDuration} value={this.state.duration}></input></p>
                <p>Description  : <input type="text" onChange={this.updateDescription} value={this.state.description}></input></p>
                <input type="button" value="Submit" onClick={this.submitExperience} className="submit-button"></input>
            </div>
        )
    }

    submitExperience = () => {
        let data = {
            company: this.state.company,
            position: this.state.position,
            duration: this.state.duration,
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
        this.props.getExperience(this.state);
    }

    showMyExperience = () => {
        let pivotalButton = <PivotalButton mode={this.props.mode} value="Add" onClick={this.editState} className="add-button"></PivotalButton>
        if (this.state.data.length === 0) {
            return pivotalButton;
        } else {
            let data = [];
            let item = this.state;
            for (let i = 0; i < this.state.data.length; i++) {
                data.push(<ShowExperience key={i} index={i} mode={this.props.mode} company={item.data[i].company} position={item.data[i].position} duration={item.data[i].duration} description={item.data[i].description} deleteExperience={this.deleteExperience}></ShowExperience>)
            }
            return <div className="my-experience">
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
                <div className="my-experience-container">
                    <h2>My Experience</h2>
                    {this.showMyExperience()}
                </div>
            )
        } else if (this.state.edit === true) {
            return (
                <div className="my-experience-container">
                    <h2>My Experience</h2>
                    {this.addExperience()}
                </div>
            )
        }
    }
}

export default MyExperience;