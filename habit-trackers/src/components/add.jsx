import React, { memo } from "react";

const Add = memo((props) => {
  // class에 purecomponent가 있다면 함수에는 memo가 있다 purecomponent처럼 props가 변경되지 않으면 함수가 호출x
  const formRef = React.createRef();
  const addFormInput = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = addFormInput.current.value;
    inputValue && props.onAdd(inputValue);
    formRef.current.reset();
  };
  return (
    <form ref={formRef} onSubmit={handleSubmit} className="addForm">
      <input
        ref={addFormInput}
        className="addForm__input"
        placeholder="Habit"
        type="text"
      />
      <button className="addForm__button">Add</button>
    </form>
  );
});

export default Add;
