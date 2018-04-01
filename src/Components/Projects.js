import React, { Component } from 'react';
import {getCats} from "../helpers";
import Project from "./Project";
import EditProject from "./EditProject";
import FilterCat from './FilterCat';
var shortid = require('shortid');

class Projects extends Component {
 
  displayProjects = projects => {
    let projectList = projects;
    if (this.props.filterBy !== "All") {
      projectList = projectList.filter( project => project.category === this.props.filterBy);
    }
    
    let sortedProjects = projectList.sort( ( A , B)  => {
      return new Date(A.date) - new Date(B.date);
    })
    return sortedProjects.map( (project, index) => {
        if (!project.edit) {
          return <Project 
              editClickHandle={this.props.editClickHandle} 
              toggleTask={this.props.toggleTask} newTask={this.props.newTask} 
              key={shortid.generate()} 
              project={project} />
        }
        else {
          return <EditProject 
              updateProject={this.props.updateProject} 
              editClickHandle={this.props.editClickHandle} 
              key={shortid.generate()} 
              deleteProject={this.props.deleteProject}
              project={project} />
        }
    })
      
  }      
    
    
  render() {
    return (
      <div className="projects">
      
       <h3>Projects</h3>
       <FilterCat updateCats={this.props.updateCats} cats={getCats(this.props.projects)} />
        <div className="projects-container">
            {this.displayProjects(this.props.projects)}
        </div>
      </div>
    );
  }
}

export default Projects;
