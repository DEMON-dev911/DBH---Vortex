import LoginDiv from "./components/LoginDiv.jsx";
import Form from "./components/Form.jsx";
import LoginTitle from "./components/LoginTitle.jsx";

const Login = ({ setSelectedUserPass }) => {

    const style = "w-96 h-96 rounded-2xl text-center items-center justify-center gap-4 bg-neutral-900";

  return (
    <div className="w-screen h-screen grid place-items-center bg-stone-950">
      {/* <div className={style}>
        <LoginTitle />
        <Form />
      </div> */}
      <LoginDiv setSelectedUserPass={setSelectedUserPass} />
    </div>
  );
};

export default Login;
