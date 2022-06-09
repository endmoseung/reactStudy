import React from "react";
import styles from "./card.module.css";

const DEFAULT_IMAGE = "/images/default_logo.png";
const Card = ({ card }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <li className={`${styles.card} ${pickstyles(theme)}`}>
      <img className={styles.avatar} src={url} alt="profilePhoto" />
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.company}>{company}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.email}>{email}</div>
        <div className={styles.message}>{message}</div>
      </div>
    </li>
  );
};

function pickstyles(theme) {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "colorful":
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}
export default Card;
