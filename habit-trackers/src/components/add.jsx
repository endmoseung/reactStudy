
import React, { PureComponent } from 'react';

class Add extends PureComponent { // PureComponent : 최상위에 있는 데이터가 변하지 않으면 render 함수가 호출되지 않는다. 일반 component와 다른점은 shouldComponentUpdate()의 유무인데 이함수는 간단하게 말하면 이전상태의 props나 state를 현재의 propse나 state와 비교하여 변경점이 없으면 false를 리턴해서 변경점이 없게하고 업데이트가 필요하면 true를 리턴하여 원래 component처럼 업뎃한다, 이것은 shallow하게 비교하는데 이떄 shallow하다는것은 비교하는 객체가 있다고하면 ref와 비교하여 즉 최상위의 값이 같고 자식이 변경되어도 같다고 취급하고 false를 return deepcomparison은 shallow와 반대로 자식요소에 변경점이 있다면 변경해야 한다고 간주한다.
  formRef = React.createRef();
  addFormInput =React.createRef();

  handleSubmit = (e)=>{
    e.preventDefault();
    const inputValue = this.addFormInput.current.value;
    inputValue && this.props.onAdd(inputValue)
    this.formRef.current.reset();
  }

  render() {
    return (
      <form ref={this.formRef} onSubmit={this.handleSubmit} className='addForm'>
        <input ref={this.addFormInput} className='addForm__input' placeholder='Habit' type="text" />
        <button className='addForm__button'>Add</button>
      </form>
    );
  }
}

export default Add;