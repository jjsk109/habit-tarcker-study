import React, { Component } from 'react';

import Habit from './habit';
import Habitaddform from './habitaddform';

class Habits extends Component {
    // 내가 작성한 코드 여기서 state를 관리하고 처리 했었음
    // 엘리 선생님은 app에서 처리를 진행함
    // state = {
    //     habits : [
    //         {id : 0, name : 'Reding', count : 0},
    //         {id : 1, name : 'Runing', count : 0},
    //         {id : 2, name : 'Codinging', count : 0},
    //     ],
    // }
    // // 습관을 관리하는 
    // handelIncrement = (habit) =>{
    //     console.log(`hableIncremet ${habit.name}`);
    //     // 내가 한 방식 --> 세로운 배열에 넣는 방식이 어려웠음
    //     // console.log(this.state.habits);
    //     // const habits = [];
        
    //     // for(var i = 0 ; i < this.state.habits.length ; i++){
    //     //     if(this.state.habits[i].name === habit.name){
    //     //         habits.push({id: habit.id, name : habit.name, count : habit.count +1 })
    //     //     }else{
    //     //         habits.push(this.state.habits[i]);
    //     //         console.log("else : ",this.state.habits[i])
    //     //     }
    //     // }
    //     // console.log(habits)
    //     // this.setState({
    //     //     habits 
    //     // });
        
    //     // 엘리 선생님이 하신 방법
    //     const habits = [...this.state.habits]; // ... = Spread Operator 
    //     const index = habits.indexOf(habit);
    //     habits[index].count++;
    //     this.setState({habits});
    //     this.props.onIncrement(habits);
    // }
    // handelDecrement = (habit) => {
    //     console.log(`hableDecremet ${habit.name}`);
    //     const habits = [...this.state.habits];
    //     const index = habits.indexOf(habit);
    //     const count = habits[index].count - 1;
    //     habits[index].count = count < 0 ? 0 : count ; // 이것도 안좋은 예제 입니다
    //     this.setState({habits})
    //     this.props.onDecrement(habits);
    
    // }
    // handleDelete = (habit) => {
    //     console.log(`hableDelete ${habit.name}`);
    //     // 내가 한 방식 마지막에 삭제된 것으로 출력되지 않음 .... 왜지?? 
    //     // 안됬던 이유 키?와 벨류가 같을 때만 생략이 가능한데 다름에도 생략을 해서 
    //     // 키가 없이 출력을 할 수 없어 변동이 없었음
    //     // 키를 추가 하니 출력이 됨
    //     // const habits = [...this.state.habits];
    //     // const habits2 = [];
    //     // const index = habits.indexOf(habit);
    //     // for(var i = 0; i < habits.length; i ++ ){
    //     //     if(i != index){
    //     //         habits2.push(habits[i]);
    //     //     }
    //     // }
    //     // console.log(habits2);
    //     // this.setState({habits:habits2});
    
    //     // 엘리 선생님방식 배열의 api인 filter를 사용 하여 걸러내기 쉽다
    //     const habits = this.state.habits.filter(item => item.id !== habit.id);
    //     this.setState({habits});
    //     this.props.onDelete(habits);
        
    // }
    // hadelAdd = (habit) => {
    //     console.log(`hadelAdd ${habit}`);
    //     // this.setState({habit});
    //     const count = new Date ;
    //     const habits = this.state.habits.concat({id:count, name : habit,count:0});
    //     this.setState({habits});
        
    // }
    // handleReset = () => {
    //     const habits = [...this.state.habits];
    //     console.log(habits);
        
    //     this.props.onReset();
    // }
    // ----------------------------------------------------------------------------------------------------
    // 엘리쌤 코드

    handelIncrement = (habit) =>{
        this.props.onIncrement(habit);
    }
    handelDecrement = (habit) => {
        this.props.onDecrement(habit);
    }
    handleDelete = (habit) => {
        this.props.onDelete(habit);
    }
    hadelAdd = (name) => {
        this.props.onAdd(name);
    }
    render() {
        console.log(this.props.habits)
        return (
            <>
                <Habitaddform onAdd = {this.hadelAdd} />
                <ul>
                    {
                        this.props.habits.map(habit => 
                            <Habit habit={habit} 
                                key={habit.id}
                                onIncrement = {this.handelIncrement}
                                onDecrement = {this.handelDecrement}
                                onDelete = {this.handleDelete}
                            />
                    )}
                </ul>
                <button onClick={this.handleReset}>Reset All</button>
            </>
        );
    }
}

export default Habits;