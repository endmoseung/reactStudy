import React from "react";
import Card from "../card/card";
import styles from "./cardPreview.module.css";

const CardPreview = ({ cards }) => {
  return (
    <div>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card card={card}></Card>
        ))}
      </ul>
      <h2>cdcdcdc</h2>
    </div>
  );
};

export default CardPreview;
