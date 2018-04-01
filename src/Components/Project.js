import React, { Component } from 'react';
import TimeRemaining from './TimeRemaining.js';
import Tasklist from './Tasklist';


class Project extends Component {
  
  editToggle = () => {
      this.props.editClickHandle(this.props.project.id)
    } 
  
  render() {
    let project = this.props.project;
    let date = new Date(project.date);

    return (
        
    <div className="project-container">
        <div className="project-title">
            <h4>{project.title} - <span>{ project.category? project.category: ""}</span></h4>
        </div>
        <button className="btn" onClick={this.editToggle} >Edit Project</button>
        <div className="project-details">
          {!date? "": 
          <div className="project-date"><div>{date.toDateString()} <br/> <TimeRemaining date={date} /></div></div>
          }
          <h4>Project Details</h4>
          <p>{project.details}</p>
          <h4>Tasks</h4>
          <Tasklist toggleTask={this.props.toggleTask} tasks={project.tasks} id={project.id} newTask={this.props.newTask}/>
        </div>
    </div>
    );
  }
}

export default Project;