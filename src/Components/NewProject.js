import React, { Component } from 'react';
import {validateForm} from '../helpers';
import DatePicker from './DatePicker';
import InputContainer from './InputContainer'

class NewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
        error : "",
        day: 1,
        month: 1,
        year: 2018,
        title: "",
        category: "",
        details: "",
    }


    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
    this.getSelectValue = this.getSelectValue.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }    
    handleSubmitForm = (e => { 
        e.preventDefault();
        const date = `${this.state.month}/${this.state.day}/${this.state.year}`;
        const newProject = {
            title: this.state.title,
            category: this.state.category,
            date,
            details: this.state.details,
            tasks: []
        }
        
        console.log(date);
        
        // Check Form has been filled in
        let error = validateForm(newProject);
        if (error !== ""){
            this.setState({error: error })
            return;
        }
        
        // Add the project to App.js state
        this.props.addProject(newProject);
        
        // Reset the New Project Form
        this.projectForm.reset();
        // Hide the form
        this.props.toggleForm();
        
        
        
    });
    
    handleCloseForm = ((e) => {
        console.log('click');
        this.props.toggleForm();
    })
    
    getSelectValue = (value) => {

    }
    
    inputChange = e => {
        this.setState({
         [e.target.name]: e.target.value
        });
        console.log(this.state);
    }
    

    

    
    render() {
        return (
            <div className="new-project-form">
                <div className="new-project-header">
                    <h3>Create a new Project</h3>
                </div>
                <button className="btn" onClick={this.handleCloseForm}>Close Form</button>
                <h3 className="error">{this.state.error? `Please Fill in the ${this.state.error}` : ""}</h3>
                <form ref={(input) => this.projectForm = input} onSubmit={this.handleSubmitForm} className="new-project">
                    <InputContainer type="text" name="title" value={this.state.title} inputChange={this.inputChange} />
                    <InputContainer type="text" name="category" value={this.state.category} inputChange={this.inputChange} />
                    <DatePicker inputChange={this.inputChange}/>
                    <InputContainer type="textarea" name="details" value={this.state.details} inputChange={this.inputChange} />
                    <input  className="add-project"type="submit" value="Add Project"/>
                </form>
            </div>
            )
    }
}

export default NewProject;