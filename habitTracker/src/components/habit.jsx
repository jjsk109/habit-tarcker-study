import React, { Component } from 'react';

class Habit extends Component {
    state={
        habit: 'Reading',
        count : 0
    };

    handelIncrement = () =>{
        //state 오브젝트 안에 있는 count를 증가 한뒤 state를 업데이트 해야 함
        this.setState({count: this.state.count + 1});
    }

    handelDecrement = () => {
        const count = this.state.count - 1;
        
        this.setState({count: count < 0 ? 0 : count});
    }

    render() {
        return (
            <li className="habit">
                <span className="habit-name">{this.state.habit}</span>
                <span className="habit-count">{this.state.count}</span>
                <button className="habit-button habbit-increase" onClick={this.handelIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habbit-decrease"onClick={this.handelDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habbit-delete">
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;