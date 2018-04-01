import React, { Component } from 'react';
import Projects from './Components/Projects';
import NewProject from './Components/NewProject';


class App extends Component {
  
  constructor() {
  super();
  this.state = {
    filterBy : "All",
    projectCount: 2,
    projects: [
        {
          title: 'Business website',
          id: 0,
          category: "Web Design",
          date: "March 13, 2018",
          details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          tasks: [
              ["Fix Ui", false],
              ["Store State across Sessions", true],
              ["Color Code Categories", true],
              ["Add new tasks", true],

            ],
            edit: false
        },        {
          title: 'Social App',
          id: 1,
          category: "Mobile Development",
          date: "April 17, 2018",
          details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          tasks: [],
          edit: false
        },
       ],
      newProjectForm: false,
      
  };
  
  this.toggleNewForm = this.toggleNewForm.bind(this);
  this.addProject = this.addProject.bind(this);
  this.editClickHandle = this.editClickHandle.bind(this);
  this.updateProject = this.updateProject.bind(this);
  }
  
  deleteProject = (id) => {
     let projects = this.state.projects.filter( project => project.id !== id);
     this.setState({projects});
  }
  
  editClickHandle = (id) => {
    let projects = this.state.projects;
    projects = projects.map ( project => {
      if (project.id === id) {
        project.edit = !project.edit;
      }
      return project;
    })
    
    this.setState({projects});
  }
  
  toggleTask = (taskid , id) => {
    let projects = this.state.projects.map(project => {
      if (project.id === id ) {
        let tasks = project.tasks;
        
        // Find clicked task and flip its status
        let newTasks = tasks.map( (currentTask, i) => {
          if ( i === taskid ){
            currentTask[1] = !currentTask[1];
            return currentTask;
          }
          return currentTask;
        });
        
        
        project['tasks'] = newTasks;
      }
      return project;
    })
    
    this.setState({projects});
  }
  
  newTask = (task, id) => {
    let projects = this.state.projects.map(project => {
      if (project.id === id ) {
        project.tasks.push([task, true]);
        return project;
      }
      return project;
      
      })
    this.setState({projects});
  }
  
  addProject(data){
    let stateCopy = this.state.projects.slice();
    let projectCount = this.state.projectCount;
    projectCount++;
    data.id = this.state.projectCount;
    stateCopy.push(data);
    this.setState({projects: stateCopy});
    this.setState({projectCount: projectCount++})
  }
  
  updateProject(id, editedProject) {
      let projects = this.state.projects.map(project => {
      if (project.id === id ) {
        editedProject.tasks = project.tasks;
        editedProject.id = id;
        return editedProject;
      }
      else {
        return project;
      }
    });
    this.setState({projects});        
  }
  
  toggleNewForm(){
    let formStatus = !this.state.newProjectForm;
    this.setState({newProjectForm: formStatus});
  }
  
  updateCats = (cat) => {
    this.setState({filterBy: cat});
  }
  
  
  render() {
    return (
      <div className="App">
        
      
        <Projects toggleTask={this.toggleTask}
                  updateCats={this.updateCats} 
                  newTask={this.newTask} 
                  filterBy={this.state.filterBy} 
                  projects={this.state.projects}
                  editClickHandle={this.editClickHandle}
                  updateProject={this.updateProject}
                  deleteProject={this.deleteProject}
        />
        
        {this.state.newProjectForm? <NewProject toggleForm={this.toggleNewForm} addProject={this.addProject}/> 
        : <button className="btn" onClick={this.toggleNewForm}>Add New Project</button>}
      
      
      </div>
    );
  }
}

export default App;
