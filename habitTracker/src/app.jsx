import React, { Component } from 'react';
import './app.css';
import Addform from './components/addform';

import Habits from './components/habits';
import Navbar from './components/navbar';

class Apppp extends Component {
  state = {
    count : 0,
  }
  handelIncrement = (habits) =>{
    console.log(`app : handelIncrement`);
    console.log(habits);
    var cnt = 0;

    for(var i = 0; i < habits.length; i ++){
      console.log(habits[i].count);
      
      if(habits[i].count !== 0){
        cnt = cnt + 1;
      }
     
    }
    this.setState({count:cnt})
  }
  handelDecrement = (habits) =>{
    console.log(`app : handelDecrement`);

    console.log(habits);
    var cnt = 0;

    for(var i = 0; i < habits.length; i ++){
      console.log(habits[i].count);
      
      if(habits[i].count !== 0){
        cnt = cnt + 1;
      }
     
    }
    this.setState({count:cnt})
  }
  handleDelete = (habits) =>{
    console.log(`app : handleDelete`);

    console.log(habits);
    var cnt = 0;

    for(var i = 0; i < habits.length; i ++){
      console.log(habits[i].count);
      
      if(habits[i].count !== 0){
        cnt = cnt + 1;
      }
     
    }
    this.setState({count:cnt})
  }
  handleReset = () => {
    this.setState({count: 0});
  }
  render() {
    return (
      <div>
        <Navbar count = {this.state.count}/>
        <Habits 
                onIncrement = {this.handelIncrement}
                onDecrement = {this.handelDecrement}
                onDelete = {this.handleDelete}
                onReset = {this.handleReset}
        />
       
      </div>
    );
  }
}

export default Apppp;