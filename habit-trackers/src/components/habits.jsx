import React, { Component } from 'react';
import Habit from './habit';
import Add from "../components/add";

class Habits extends Component {
  
  render() {
    console.log("habits");
    return (
      <>
        <Add
        onAdd={this.props.onAdd}></Add>
        <ul>
          {
            this.props.habits.map(habit =>(
            <Habit 
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
              />//habit이라는 props에 habit이벤트 즉 habits를 전달해줌
          ))}
        </ul>
        <button onClick={this.props.onReset} className='reset'>
        Reset All
      </button>
      </>
    );
  }
}

export default Habits;