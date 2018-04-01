import React, { Component } from 'react';

class Task extends Component {
    
    handleClick = (e) => {
        this.props.toggleTask(this.props.taskId, this.props.id)
    }
    
    render() {
        return (
                <li 
                    className={this.props.task[1]? "": "check"}
                    onClick={this.handleClick}>
                    {this.props.task}
                </li>
                )
    }
}

export default Task;