import React, { Component } from 'react';
import Option from './Option';

class FilterCat extends Component {
    displayOptions = (cats) => {
        return cats.map( (cat, i) => <Option key={i} value={cat} /> );
    }
    
    changeCat = () => {
        this.props.updateCats(this.cat.value)
    }
    
    
    render() {
        return (
               <select ref={ (input) => this.cat = input } onChange={this.changeCat.bind(this)} className="filter">
                <Option key="-1" value="All" />
                {this.displayOptions(this.props.cats)}
               </select>
            )
    }
}

export default FilterCat;