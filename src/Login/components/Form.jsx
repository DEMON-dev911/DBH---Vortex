import GojoBtn from "../assets/Btn-gojo.png";
import LoginData from "../../Database/LoginData";

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ setSelectedUserPass }) => {
  const [hover, setHover] = useState(false);
  // const [navigate, setNavigate] = useState(false);
  const navigate = useNavigate();
  const username = useRef(null);
  const password = useRef(null);

  // if (navigate === true) {
  //   window.location.href = "/home";
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredUser = username.current.value;
    const enteredPass = password.current.value;
    let LoginUser = null;
    let LoginPass = null;

    console.log(enteredPass);
    LoginData.map((item) => {
      if (item.username === enteredUser) {
        if (item.password === enteredPass) {
          console.log("Successfull");
          LoginUser = enteredUser;
          LoginPass = enteredPass;
          // setNavigate(true);
          navigate("/home");
        } else {
          console.log("Invalid");
        }
      }
    });

    setSelectedUserPass({
      Username: LoginUser,
      Password: LoginPass,
    });

  };

  const inputStyle =
    "w-80 h-12 rounded-md border border-neutral-300 px-2 text-stone-600 bg-stone-300";

  return (
    <>
      <form className="flex flex-col justify-center items-center gap-4">
        <input
          type="text"
          ref={username}
          placeholder="Enter your username"
          className={inputStyle}
        />
        <input
          type="password"
          ref={password}
          placeholder="Enter your password"
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
      <p className="text-white text-sm mt-2">
        By login you agree to our{" "}
        <a href="#" className="_blank hover:underline">
          <strong>Terms of Service</strong>
        </a>
      </p>
    </>
  );
};

export default Form;
