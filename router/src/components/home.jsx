import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>홈이에용</h1>
      <button onClick={() => navigate("/profile")}>프로파일로 가세용</button>
    </>
  );
};

export default Home;
