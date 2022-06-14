import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const onButtonClick = () => {
    inputRef.current.click(); // 라벨이 클릭돼도 인풋이 클릭된것 처럼
  };

  const FileChange = async (event) => {
    console.log(event);
    const uploaded = await imageUploader.upload(event.target.files[0]); //이게 실행될때까지 기다렸다가 완료되면 uploaded에 할당
    console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <div className={styles.container}>
      <label
        onClick={onButtonClick}
        className={onFileChange.name ? styles.buttonActive : styles.button}
        for="ex_file"
        htmlFor=""
      >
        {name || "no file"}
      </label>
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
    </div>
  );
};

export default ImageFileInput;
