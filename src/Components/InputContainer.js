import React, { Component } from 'react';

class InputContainer extends Component {

    render() {
        return (
            <div className="input-container">
                <label>{this.props.name}</label>
                {this.props.type === "text" ? 
                <input  name={this.props.name} type="text"  value={this.props.value} onChange={this.props.inputChange} /> :
                <textarea name={this.props.name} value={this.props.details} onChange={this.props.inputChange}></textarea>
                }
            </div>
            )
    }
}

export default InputContainer;