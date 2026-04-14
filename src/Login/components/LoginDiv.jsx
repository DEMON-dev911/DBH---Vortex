import LoginTitle from "./LoginTitle.jsx";
import Form from "./Form.jsx";
import ImgCircle from "./ImgCircle.jsx";

import { useRef } from 'react';

const LoginDiv = ({ setSelectedUserPass }) => {

  const style =
    "w-96 h-96 rounded-2xl text-center items-center justify-center gap-4 bg-neutral-900";

  return (
    <div className={style}>
      <ImgCircle />
      <LoginTitle />
      <Form setSelectedUserPass={setSelectedUserPass} />
    </div>
  );
};

export default LoginDiv;
