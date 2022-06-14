import React, { useRef } from "react";
import { useState } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const onButtonClick = () => {
    inputRef.current.click(); // 라벨이 클릭돼도 인풋이 클릭된것 처럼
  };

  const FileChange = async (event) => {
    setLoading(true);
    const uploaded = await imageUploader.upload(event.target.files[0]); //이게 실행될때까지 기다렸다가 완료되면 uploaded에 할당
    setLoading(false); //로딩이 끝났으면  다시 false로 바꿔준다
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <div className={styles.container}>
      {!loading && (
        <label
          onClick={onButtonClick}
          className={name ? styles.buttonActive : styles.button}
          htmlFor="ex_file"
        >
          {name || "no file"}
        </label>
      )}
      <input
        ref={inputRef}
        accept="image/*"
        name="file"
        className={styles.input}
        id="ex_file"
        type="file"
        multiple
        onChange={FileChange}
      />
      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default ImageFileInput;
