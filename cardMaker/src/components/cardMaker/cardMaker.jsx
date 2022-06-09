import React from "react";
import CardAddForm from "../card_add_form/card_add_form";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./cardMaker.module.css";

const CardMaker = ({ cards, addCard }) => {
  return (
    <div className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map((card) => (
        <CardEditForm key={card.id} card={card}></CardEditForm>
      ))}
      <CardAddForm onAdd={addCard}></CardAddForm>
    </div>
  );
};

export default CardMaker;
