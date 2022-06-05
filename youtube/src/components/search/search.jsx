import React, { memo, useRef } from "react";
import styles from "../search/search.module.css";

const Search = memo((props) => {
  const formRef = useRef();
  const searchInput = useRef();

  const submitHandle = (e) => {
    e.preventDefault();
    const inputValue = searchInput.current.value;
    formRef.current.reset();
    inputValue && props.onSearch(inputValue);
  };
  return (
    <form
      ref={formRef}
      onSubmit={submitHandle}
      className={styles.searchWrapper}
    >
      <div className={styles.youtubeLogo}>
        <i className="fa-brands fa-youtube"></i>
      </div>
      <div className={styles.youtubeText}>Youtube</div>
      <input
        ref={searchInput}
        placeholder="검색"
        className={styles.searchInput}
        type="search"
      />
      <button className={styles.searchButton}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
});

export default Search;
