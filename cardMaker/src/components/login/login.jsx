import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const navigator = useNavigate();
  const goToMaker = (userId) => {
    //uid의 정보를 받아서 id값에 uid값을 넣어준다
    navigator({
      pathname: "/maker",
      state: { id: userId },
    });
  };
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => {
        goToMaker(data.user.uid);
        console.log(data);
      }); // 데이터를 받아서 거기에 있는 uid의 정보를 넘겨줄것이다
  };
  useEffect(() => {
    authService.onAuthChange((user) => {
      //home이 마운트 됐을때 user의 정보가 있다면 바로 maker페이지로 이동해라
      user && goToMaker(user.id);
    });
  });
  return (
    <div className={styles.loginWrapper}>
      <Header></Header>
      <section className={styles.section}>
        <h1>login</h1>
        <ul className={styles.list}>
          <li>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Login;
