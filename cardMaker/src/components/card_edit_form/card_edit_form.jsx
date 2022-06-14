import React, { useRef } from "react";
import Button from "../button/button";
import styles from "./card_edit_form.module.css";

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const handleDelete = (event) => {
    deleteCard(card);
  };
  const onChange = (e) => {
    if (e.currentTarget == null) {
      return;
    }
    e.preventDefault();
    updateCard({
      ...card,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <form className={styles.form}>
      <input
        onChange={onChange}
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        value={name}
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        value={company}
        onChange={onChange}
      />
      <select
        onChange={onChange}
        ref={themeRef}
        className={styles.select}
        name="theme"
        value={theme}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        onChange={onChange}
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        value={title}
      />
      <input
        onChange={onChange}
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        value={email}
      />
      <textarea
        onChange={onChange}
        ref={messageRef}
        className={styles.textarea}
        name="message"
        value={message}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange}></FileInput>
      </div>
      <Button name="delete" onClick={handleDelete}></Button>
    </form>
  );
};

export default CardEditForm;
