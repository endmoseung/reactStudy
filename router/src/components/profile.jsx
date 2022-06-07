import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>프로파일 이에용</h1>
      <button onClick={() => navigate("/")}>홈으로 가세용</button>
    </>
  );
};

export default Profile;
