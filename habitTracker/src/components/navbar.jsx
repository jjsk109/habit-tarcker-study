import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        const count = this.props.count;
        return (
            <div>

                <h1>{count} Habit Traker</h1>
            </div>
        );
    }
}

export default Navbar;