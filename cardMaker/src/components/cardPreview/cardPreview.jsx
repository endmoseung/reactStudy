import React from "react";
import Card from "../card/card";
import styles from "./cardPreview.module.css";

const CardPreview = ({ cards }) => {
  return (
    <div className={styles.cardPreview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card card={card}></Card>
        ))}
      </ul>
    </div>
  );
};

export default CardPreview;
