import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardMaker from "../cardMaker/cardMaker";
import CardPreview from "../cardPreview/cardPreview";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "seungmo",
      company: "opgg",
      theme: "dark",
      title: "frontend",
      email: "tmdah900@gmail.com",
      message: "go for it",
      fileName: "seungmo",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "seungmo2",
      company: "opgg",
      theme: "light",
      title: "frontend",
      email: "tmdah900@gmail.com",
      message: "go for it",
      fileName: "seungmo",
      fileURL: "seungmo.png",
    },
    3: {
      id: "3",
      name: "seungmo3",
      company: "opgg",
      theme: "colorful",
      title: "frontend",
      email: "tmdah900@gmail.com",
      message: "go for it",
      fileName: "seungmo",
      fileURL: null,
    },
  });

  const navigator = useNavigate();
  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    authService.onAuthChange((user) => {
      //user의 정보가 없다면 즉 로그아웃 됐다면 home으로 이동해라
      if (!user) {
        navigator("/");
      }
    });
  });
  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };
  const handleUpdate = (card) => {
    // const updated = { ...cards }; //시시떄떄로 변하는 아이한테는 map이나 for을 돌리는건 성능에 상당히 좋지않다.
    // updated[card.id] = card; // 현재 이벤트에 해당하는 card.id라는 key에 해당하는 card를 넣어준다
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };
  return (
    <section className={styles.wrapper}>
      <Header onLogout={onLogout}></Header>
      <div className={styles.main}>
        <div className={styles.cardMaker}>
          <CardMaker
            updateCard={handleUpdate}
            addCard={handleUpdate}
            deleteCard={deleteCard}
            cards={cards}
          ></CardMaker>
        </div>
        <div className={styles.cardPreview}>
          <CardPreview cards={cards}></CardPreview>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Maker;
