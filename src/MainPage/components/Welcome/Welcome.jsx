import welcomeGIF from "../assets/welcome.png";
import welSuk from '../assets/welcome-sukuna.png'

const Welcome = ({ selectedUserPass }) => {

  console.log(selectedUserPass.Username);


  return (
    <main className="w-full flex flex-col items-center justify-center gap-2 py-8">
      {/* <img src={welcomeGIF} alt="Welcome" className="w-1/2 h-1/2" /> */}
      <div className="bg-stone-400/50 p-4 rounded-3xl shadow-xl hover:shadow-3xl hover:scale-105 md:scale-95 md:hover:scale-100 transform-gpu">
      <span>
        <img src={welSuk} alt="Welcome" className="" />
        <h2 className="text-center text-4xl flex items-center justify-center gap-4 text-stone-500">
          Welcome to {selectedUserPass.Username}<span className="underline hover:text-stone-700 cursor-default">DB - Handler</span>
        </h2>
      </span>
      <p className="text-center text-2xl flex items-center justify-center gap-4 text-stone-700 hover:underline">DB - Handler makes it easier to deal with data.</p>
      </div>
    </main>
  );
};

export default Welcome;
