import React from "react";
import Card from "../card/card";
import styles from "./cardPreview.module.css";

const CardPreview = ({ cards }) => {
  return (
    <div className={styles.cardPreview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>
        {Object.keys(cards).map(
          (
            key //object.keys object안에 있는 key들의 value를 토대로 새로운 배열을 만듬
          ) => (
            <Card key={key} card={cards[key]}></Card>
          )
        )}
      </ul>
    </div>
  );
};

export default CardPreview;
