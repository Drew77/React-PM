import React, { Component } from 'react';
import {daysRemaining} from '../helpers';
import {displayRemaining} from '../helpers';

class TimeRemaining extends Component {
    render() {
        let daysLeft = daysRemaining(this.props.date);
        return (
                <span className={daysLeft < 0? "red" : "green"}>{displayRemaining(daysLeft)}</span>
            )
    }
}

export default TimeRemaining;