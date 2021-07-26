import React, { Component } from 'react';

class Habitaddform extends Component {
    
    // hadelAdd = (event) => {
    //     // 내가 추가한 만든 add 폼 이걸 해보기
    //     const habit = document.getElementsByClassName("add-input")[0].value;
    //     this.props.onAdd(habit);
    //     document.getElementsByClassName("add-input")[0].value = '';
    // }

    // 엘리쌤 수업 -------------
    inputRef = React.createRef();
    onSubmit = event => {
        
        event.preventDefault();
        console.log(this.inputRef.current.value);
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.inputRef.current.value = '';
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    ref={this.inputRef}
                    type="text" 
                    className="add-input" 
                    placeholder="Habit"/>
                {/* <button onClick={this.hadelAdd}>add</button> */}
                <button>Add</button>
            </form>
        );
    }
}

export default Habitaddform;