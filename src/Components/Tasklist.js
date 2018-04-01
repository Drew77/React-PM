import React, { Component } from 'react';
import Task from './Task';
var shortid = require('shortid');

class Tasklist extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }
    
    handleChange = (e) => {
        this.setState({value: e.target.value})
    }
    
    displayTasks = tasks => {
        return tasks.map( (task, i) => {
            return <Task key={shortid.generate()} taskId={i} toggleTask={this.props.toggleTask}  id={this.props.id} task={task} />
        })
    }
    
    submitForm = (e) => {
        e.preventDefault();
        this.props.newTask(this.state.value, this.props.id);
        this.setState({value: ""});
    }
    
    render() {
        return (
            <div>
                <ul>
                    {this.displayTasks(this.props.tasks)}
                    
                </ul>
                <form onSubmit={this.submitForm}>
                    <input type="text"  value={this.state.value} placeholder="New Task" onChange={this.handleChange}/>
                </form>
            </div>
                )
    }
}

export default Tasklist;