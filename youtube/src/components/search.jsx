import React from 'react';

const Search = (props) => {
  const formRef = React.createRef();
  const searchInput =React.createRef();

  const submitHandle = (e)=>{
    e.preventDefault();
    const inputValue = searchInput.current.value;
    inputValue && props.onAdd(inputValue)
    formRef.current.reset();
    console.log(inputValue);
  }
      return(
        <form ref={formRef} onSubmit={submitHandle} className='searchWrapper'>
          <i className="fa-brands fa-youtube"></i>
          <div className="youtubeText">Youtube</div>
          <input ref={searchInput} placeholder='검색' className='searchInput' type="text" />
          <button className='searchButton'><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
      );
  };

export default Search;  