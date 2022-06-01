import React, {Component} from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

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
    const habits = this.state.habits.map(item=>{// 여기서 map은 새로운 habits를 만드는데 만약 서로 같은 id의 habit이라면 count를+1한채로 만든다.
      if(item.id === habit.id){
        return {...habit, count : habit.count +1};
      }
      return item;
    })
    this.setState({habits});//this.state와 내가 새로만든 state의 이름이 같은경우 habits:habits을 habits로 바꿔줄수 있다.
  };
  handleDecrement = (habit)=>{
    const habits = this.state.habits.map(item=>{
      if(item.id === habit.id){
        const count =  habit.count -1
        return {...habit, count : count<0 ? 0 : count};
      }
      return item;
    })
    this.setState({habits});
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
    const habits = this.state.habits.map(habit=>{
      if(habit.count!==0){
        return {...habit, count : 0};
      }
      return habit;
    })
    this.setState({habits});
  }

  render() {
    console.log("app");
    return (
      <div className="habitTracker">
        <Navbar
        totalCount={this.state.habits.filter(item => item.count>0).length}
        ></Navbar>
        <Habits
          onReset={this.handleReset}
          onAdd={this.handleAddForm}
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}></Habits>
      </div>
    )
  }
}

export default App;
