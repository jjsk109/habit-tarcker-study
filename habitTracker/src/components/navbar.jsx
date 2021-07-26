import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        const totalCount = this.props.totalCount;
        return (
            <div>
                <span> Habit Traker</span> 
                <span>{totalCount}</span>
            </div>
        );
    }
}

export default Navbar;