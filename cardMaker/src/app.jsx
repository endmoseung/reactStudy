import React from "react";
import Login from "./components/login/login";
import styles from "./app.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Maker from "./components/maker/maker";

const App = ({ FileInput, authService, cardRepository }) => {
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.login}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Login authService={authService}></Login>}
            ></Route>
            <Route
              path="/maker"
              element={
                <Maker
                  cardRepository={cardRepository}
                  FileInput={FileInput}
                  authService={authService}
                ></Maker>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
