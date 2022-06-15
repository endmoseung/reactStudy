import React, { useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CardMaker from "../cardMaker/cardMaker";
import CardPreview from "../cardPreview/cardPreview";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService, cardRepository }) => {
  const navigator = useNavigate();
  const navigatorState = useLocation().state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(navigatorState && navigatorState.id);

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync(); //component가 unmount 됐을때 불필요한 네트워크 사용을 최소화
  }, [cardRepository, userId]); // mount됐을떄, userId가 바꼈을떄

  useEffect(() => {
    authService.onAuthChange((user) => {
      //user의 정보가 없다면 즉 로그아웃 됐다면 home으로 이동해라
      if (user) {
        setUserId(user.uid);
      } else {
        navigator("/");
      }
    });
  }, [userId, authService, navigator]);
  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };
  const handleUpdate = (card) => {
    // const updated = { ...cards }; //시시떄떄로 변하는 아이한테는 map이나 for을 돌리는건 성능에 상당히 좋지않다.
    // updated[card.id] = card; // 현재 이벤트에 해당하는 card.id라는 key에 해당하는 card를 넣어준다
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };
  return (
    <section className={styles.wrapper}>
      <Header onLogout={onLogout}></Header>
      <div className={styles.main}>
        <div className={styles.cardMaker}>
          <CardMaker
            FileInput={FileInput}
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
