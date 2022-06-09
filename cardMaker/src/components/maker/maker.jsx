import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardMaker from "../cardMaker/cardMaker";
import CardPreview from "../cardPreview/cardPreview";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
  ]);
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
  return (
    <section className={styles.wrapper}>
      <Header onLogout={onLogout}></Header>
      <div className={styles.main}>
        <div className={styles.cardMaker}>
          <CardMaker cards={cards}></CardMaker>
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
