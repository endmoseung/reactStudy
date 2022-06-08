import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardMaker from "../cardMaker/cardMaker";
import CardPreview from "../cardPreview/cardPreview";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
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
          <CardMaker></CardMaker>
        </div>
        <div className={styles.cardPreview}>
          <CardPreview></CardPreview>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Maker;
