import GojoImg from "../assets/LoginGojo.png";
import GojoEye from "../assets/gojo.jpeg";

const ImgCircle = () => {
    return ( <div style={{ backgroundImage: `url(${GojoEye})` }} className={`w-full h-1/3 mt-[-4rem] flex items-center justify-center bg-stone-800 rounded-t-xl bg-cover bg-center`}>
        <img src={GojoImg} alt="Gojo" className="w-1/3 h-full object-cover rounded-full border-stone-400 border-2" /> 
    </div> );
}
 
export default ImgCircle;