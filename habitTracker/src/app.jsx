import React, { Component } from 'react';
import './app.css';
import Habitaddform from './components/habitaddform';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  // 내가 작성한 코드 
  // app에서는 카운트만 하고 직접 관여하지 않는 형식으로 했었음
  // 
  // state = {
  //   count : 0,
  // }
  // handelIncrement = (habits) =>{
  //   console.log(`app : handelIncrement`);
  //   console.log(habits);
  //   var cnt = 0;

  //   for(var i = 0; i < habits.length; i ++){
  //     console.log(habits[i].count);
      
  //     if(habits[i].count !== 0){
  //       cnt = cnt + 1;
  //     }
     
  //   }
  //   this.setState({count:cnt})
  // }
  // handelDecrement = (habits) =>{
  //   console.log(`app : handelDecrement`);

  //   console.log(habits);
  //   var cnt = 0;

  //   for(var i = 0; i < habits.length; i ++){
  //     console.log(habits[i].count);
      
  //     if(habits[i].count !== 0){
  //       cnt = cnt + 1;
  //     }
     
  //   }
  //   this.setState({count:cnt})
  // }
  // handleDelete = (habits) =>{
  //   console.log(`app : handleDelete`);

  //   console.log(habits);
  //   var cnt = 0;

  //   for(var i = 0; i < habits.length; i ++){
  //     console.log(habits[i].count);
      
  //     if(habits[i].count !== 0){
  //       cnt = cnt + 1;
  //     }
     
  //   }
  //   this.setState({count:cnt})
  // }
  // handleReset = () => {
  //   this.setState({count: 0});
  // }
  // ----------------------------------------------------------------------------------
  
  state = {
    habits : [
        {id : 0, name : 'Reding', count : 0},
        {id : 1, name : 'Runing', count : 0},
        {id : 2, name : 'Codinging', count : 0},
    ],
    count : 0,
}
// 습관을 관리하는 
handelIncrement = (habit) =>{
    console.log(`hableIncremet ${habit.name}`);
   
    const habits = [...this.state.habits]; // ... = Spread Operator 
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({habits});
    
}
handelDecrement = (habit) => {
    console.log(`hableDecremet ${habit.name}`);
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count ; // 이것도 안좋은 예제 입니다
    this.setState({habits})
   
}
handleDelete = (habit) => {
    console.log(`hableDelete ${habit.name}`);
    // 내가 한 방식 마지막에 삭제된 것으로 출력되지 않음 .... 왜지?? 
    // 안됬던 이유 키?와 벨류가 같을 때만 생략이 가능한데 다름에도 생략을 해서 
    // 키가 없이 출력을 할 수 없어 변동이 없었음
    // 키를 추가 하니 출력이 됨
    // const habits = [...this.state.habits];
    // const habits2 = [];
    // const index = habits.indexOf(habit);
    // for(var i = 0; i < habits.length; i ++ ){
    //     if(i != index){
    //         habits2.push(habits[i]);
    //     }
    // }
    // console.log(habits2);
    // this.setState({habits:habits2});

    // 엘리 선생님방식 배열의 api인 filter를 사용 하여 걸러내기 쉽다
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});
    
}
hadelAdd = (name) => {
   
    // 내가 해본거 
    // // this.setState({habit});
    // const count = new Date ;
    // const habits = this.state.habits.concat({id:count, name : habit,count:0});
    // this.setState({habits});
    const habits = [...this.state.habits,{id:Date.now(), name, count:0}];
    this.setState({habits});
}
  render() {
    return (
      <div>
        <Navbar totalCount = {this.state.habits.filter(item => item.count > 0).length}/>
        
        <Habits 
                habits = {this.state.habits}
                onIncrement = {this.handelIncrement}
                onDecrement = {this.handelDecrement}
                onDelete = {this.handleDelete}
                onReset = {this.handleReset}
                onAdd = {this.hadelAdd}
        />
       
      </div>
    );
  }
}

export default App;