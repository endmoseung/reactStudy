import React, { PureComponent } from 'react';


class Habit extends PureComponent { // PureComponent : 최상위에 있는 데이터가 변하지 않으면 render 함수가 호출되지 않는다. 일반 component와 다른점은 shouldComponentUpdate()의 유무인데 이함수는 간단하게 말하면 이전상태의 props나 state를 현재의 propse나 state와 비교하여 변경점이 없으면 false를 리턴해서 변경점이 없게하고 업데이트가 필요하면 true를 리턴하여 원래 component처럼 업뎃한다, 이것은 shallow하게 비교하는데 이떄 shallow하다는것은 비교하는 객체가 있다고하면 ref와 비교하여 즉 최상위의 값이 같고 자식이 변경되어도 같다고 취급하고 false를 return deepcomparison은 shallow와 반대로 자식요소에 변경점이 있다면 변경해야 한다고 간주한다.

  componentDidMount(){
    console.log(`habit: ${this.props.habit.name} mounted`); //component가 render된 이후에 실행
}
componentWillUnmount(){
  console.log(`habit: ${this.props.habit.name} will unmount`); //component가 사라질떄 즉 버튼을 누르자마자 호출
}
  handleIncrement = ()=>{
    this.props.onIncrement(this.props.habit);
  }
  handleDecrement = ()=>{
    this.props.onDecrement(this.props.habit);
  }
  handleDelete = ()=>{
    this.props.onDelete(this.props.habit);
  }
  render() {
    console.log(`habit: ${this.props.habit.name}`);
  const {name, count} = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span> 
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
          <i className="fa-solid fa-square-plus"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrement} >
          <i className="fa-solid fa-square-minus"></i>
        </button>
        <button className="habit-button habit-delete" onClick={this.handleDelete}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;

//19번쨰줄 props에 habit이 저장되어 있고 그 habit의 name을 불러준다.