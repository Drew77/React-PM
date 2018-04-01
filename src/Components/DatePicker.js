import React, { Component } from 'react';
import Option from './Option.js';

class DatePicker extends Component {
    
    handleSelectChange = (e) => {
        this.props.inputChange(e)
    }
    
    createOptions(start, finish){
        let range = [];
        for (let i = start; i < finish; i++){
            range.push(i)
        }
        return range.map( i => {
            return <Option key={i} value={i} />;
        })
        
    }
    
    date = this.props.date? this.props.date: false;
    render() {
        return (
                <div className="date-picker">
                
                    <div className="date-input-container">
                        <label>Day</label>
                        <select name="day" defaultValue={this.props.day} ref={ (input) => this.day = input } onChange={this.handleSelectChange.bind(this)}>
                            {this.createOptions(1,32)}
                        </select>
                    </div>
                    
                    <div className="date-input-container">
                        <label>Month</label>
                        <select name="month" defaultValue={this.props.month} ref={ (input) => this.month = input } onChange={this.handleSelectChange.bind(this)}>
                            {this.createOptions(1,13)}
                        </select>
                    </div>
                    
                    <div className="date-input-container">
                        <label>Year</label>
                        <select name="year" defaultValue={this.props.year} ref={ (input) => this.year = input } onChange={this.handleSelectChange.bind(this)}>
                            {this.createOptions(new Date().getFullYear()-5, new Date().getFullYear()+10)}
                        </select>
                    </div>
                    
                </div>
            )
    }
}

export default DatePicker;