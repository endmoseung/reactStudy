import React, { memo } from "react";
import ReactDOM from "react-dom/client";
import "./index.module.css";
import App from "./app";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./components/image_file_input/image_file_input";
import CardRepository from "./service/card_repository";

const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
const FileInput = memo((props) => (
  <ImageFileInput {...props} imageUploader={imageUploader}></ImageFileInput> //props로 받은 값을 그대로 복사해서 그걸 넘겨준다
)); //component prop인경우에는 앞에 대문자를 써준다, 이렇게 직접 컴포넌트를 전달하는 경우 쓸대없이 많은서비스를 전달하지 않아도 된다. 파일인풋이 좀더 많은 서비스를 요구할떄 여기서만 바꿔도 된다.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      cardRepository={cardRepository}
      FileInput={FileInput}
      authService={authService}
    />
  </React.StrictMode>
);
