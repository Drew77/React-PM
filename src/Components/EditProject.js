import React, { Component } from 'react';
import DatePicker from './DatePicker.js';
import {formatDate} from '../helpers.js'



class EditProject extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: props.project.title,
      category: props.project.category,
      day: new Date(this.props.project.date).getDate(),
      month: (new Date(this.props.project.date).getMonth()) + 1,
      year: new Date(this.props.project.date).getFullYear(),
      details: props.project.details
      }

    this.inputChange = this.inputChange.bind(this);
  }      
  
  deleteProject = () => {
    this.props.deleteProject(this.props.project.id)
  }
  
  editToggle = () => {
    this.props.editClickHandle(this.props.project.id)
    }     
  
    inputChange = e => {
        this.setState({
         [e.target.name]: e.target.value
        });
    }
   updateProject = () => {
     let project = this.state;
     project.date = formatDate(this.state.day, this.state.month, this.state.year);
     let id = this.props.project.id;
     project.edit = false;
     this.props.updateProject(id, project);
   }
    
  render() {
    let project = this.props.project;
    return (
        
    <div className="project-container">
        <div className="edit-project-title">
            <input type="text" defaultValue={project.title} onChange={this.inputChange} name="title"/>
            <input type="text" defaultValue={project.category} onChange={this.inputChange} name="category"/>
        </div>
        
        <button className="btn" onClick={this.editToggle}>Undo Changes</button>
        
        <div className="edit-project-details">
          <DatePicker day = {this.state.day || new Date(this.props.project.date).getDate()}
                      month = {this.state.month || (new Date(this.props.project.date).getMonth()) + 1}
                      year = {this.state.year || (new Date(this.props.project.date).getFullYear())}
                      inputChange={this.inputChange}
          />
          <h4>Project Details</h4>
          <textarea defaultValue={project.details} onChange={this.inputChange} name="details"/>
          
          <div className="edit-project-buttons">
            <button onClick={this.updateProject} className="btn btn-green">Save Changes</button>
            <button onClick={this.deleteProject} className="btn btn-red">Delete Project</button>
          </div>
          
        </div>
    </div>
    );
  }
}

export default EditProject;