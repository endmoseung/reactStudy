import React from "react";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./cardMaker.module.css";

const CardMaker = ({ cards }) => {
  return (
    <div className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map((card) => (
        <CardEditForm card={card}></CardEditForm>
      ))}
    </div>
  );
};

export default CardMaker;
