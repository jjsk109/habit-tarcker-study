import React, { Component } from 'react';

class Habit extends Component {
  
    handelIncrement = () =>{
        this.props.onIncrement(this.props.habit);
    }
    handelDecrement = () => {
        this.props.onDecrement(this.props.habit);
    }
    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    }

    render() {
        console.log(this.props.habit);
        const { name, count} = this.props.habit;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habbit-increase" onClick={this.handelIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habbit-decrease"onClick={this.handelDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habbit-delete" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;