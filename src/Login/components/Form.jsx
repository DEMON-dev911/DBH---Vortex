import GojoBtn from "../assets/Btn-gojo.png";
import LoginData from "../../Database/LoginData";

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ setSelectedUserPass }) => {
  const [hover, setHover] = useState(false);
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();
  const username = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredUser = username.current.value;
    const enteredPass = password.current.value;

    const user = LoginData.find((item) => item.username === enteredUser);

    if (user && user.password === enteredPass) {
      console.log("Successfull");
      setSelectedUserPass({
        Username: user.username,
        Password: user.password,
      });
      setValid(true);
      navigate("/home");
    } else {
      setValid(false);
      setSelectedUserPass({
        Username: null,
        Password: null,
      });
    }
  };

  const handleErrorClick = () => {
    setValid(true);
  }

  const inputStyle =
    "w-80 h-12 rounded-md border border-neutral-300 px-2 text-stone-600 bg-stone-300";

  return (
    <>
      <form className="flex flex-col justify-center items-center gap-4">
        <input
          type="text"
          ref={username}
          placeholder="Enter your username"
          required
          className={inputStyle}
        />
        <input
          type="password"
          ref={password}
          placeholder="Enter your password"
          minLength={5}
          required
          className={inputStyle}
        />
        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={handleSubmit}
          className="w-80 h-12 rounded-md bg-stone-800 hover:bg-stone-600 text-white font-bold flex items-center justify-center"
        >
          Login{hover && <img src={GojoBtn} alt="Gojo" className="w-12 h-12" />}
        </button>
      </form>
      {valid ? 
      <p className="text-white text-sm mt-2">
        By login you agree to our{" "}
        <a href="#" className="_blank hover:underline">
          <strong>Terms of Service</strong>
        </a>
      </p> : 
      <p className="text-red-500 text-sm mt-2 hover:underline hover:cursor-default" onClick={handleErrorClick}>
        Please enter a valid username and password!!!
      </p>
      }
    </>
  );
};

export default Form;