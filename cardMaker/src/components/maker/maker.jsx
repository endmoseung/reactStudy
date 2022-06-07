import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
      if (!user) {
        navigator("/");
      }
    });
  });
  return (
    <section className={styles.wrapper}>
      <Header onLogout={onLogout}></Header>
      <div className="main">23324</div>
      <Footer></Footer>
    </section>
  );
};

export default Maker;
