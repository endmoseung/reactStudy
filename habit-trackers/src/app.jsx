import React, {Component} from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";
import Reset from "./components/reset";

class App extends Component{
  componentDidUpdate(){
    //컴포넌트가 업데이트 될때마다 호출되는 함수, 개발자툴 components tap => Highlight updates when components render. ,check and check the change
    //purecomponent and memo is the wording that components' state or props don't changed , render function don't called
  }
  state ={
    habits:[
      {id:1, name:'Reading',count : 0},
      {id:2,name:'Running',count : 0},
      {id:3,name:'Coding',count : 0}
    ]
  };
  


  handleIncrement = (habit)=>{
    const habits = [...this.state.habits]; //state를 직접 수정하는것은 좋지 않기 떄문에
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({habits:habits});
  };
  handleDecrement = (habit)=>{
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count-1;
    habits[index].count = count<0 ? 0 :count;
    this.setState({habits:habits});
  };
  handleDelete = (habit)=>{
    const habits = this.state.habits.filter(item=>item.id!== habit.id);
    this.setState({habits});
  };
  handleAddForm = (inputValue)=>{

    const habits = [...this.state.habits, {id:Number(Math.random()),name:inputValue,count:0}];
    console.log(inputValue);
    this.setState({habits});
    
  }
  handleReset = ()=>{
    const habits = [...this.state.habits];
    const mapHabits = habits.map(habits =>{
      habits.count = 0 
      return habits;
    })
    this.setState({habits:mapHabits});
  }

  render() {
    return (
      <div className="habitTracker">
        <Navbar
        totalCount={this.state.habits.filter(item => item.count>0).length}
        ></Navbar>
        <Habits
          onAdd={this.handleAddForm}
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}></Habits>
        <Reset
        habits={this.state.habits}
        onReset={this.handleReset}
        ></Reset>
      </div>
    )
  }
}

export default App;
