import React, { Component } from 'react';

class Addform extends Component {
    
    hadelAdd = (event) => {
        const habit = document.getElementsByClassName("add-input")[0].value;
        
        this.props.onAdd(habit);
        document.getElementsByClassName("add-input")[0].value = '';
    }
    render() {
        return (
            <from>
                <input type="text" className="add-input"   placeholder="Habit"></input>
                <button onClick={this.hadelAdd}>add</button>
            </from>
        );
    }
}

export default Addform;