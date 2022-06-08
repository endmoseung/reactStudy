import React, { memo, useRef } from "react";
import styles from "../search/search.module.css";

const Search = memo((props) => {
  const formRef = useRef();
  const searchInput = useRef();

  const submitHandle = (e) => {
    e.preventDefault();
    const inputValue = searchInput.current.value;
    window.scrollTo(0, 0);
    inputValue && props.onSearch(inputValue);
  };
  return (
    <form
      ref={formRef}
      onSubmit={submitHandle}
      className={styles.searchWrapper}
    >
      <a
        href="https://moseungyoutube.netlify.app/"
        className={styles.youtubeLogo}
      >
        <i className="fa-brands fa-youtube"></i>
      </a>
      <a
        href="https://moseungyoutube.netlify.app/"
        className={styles.youtubeText}
      >
        Youtube
      </a>
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
