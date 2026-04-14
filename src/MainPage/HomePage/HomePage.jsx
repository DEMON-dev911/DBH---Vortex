import SideBar from "../components/SideBar/SideBar";
import Welcome from "../components/Welcome/Welcome";



const HomePage = ({ selectedUserPass }) => {
  return (
    <div className="flex ">
      <SideBar />
      <Welcome selectedUserPass={selectedUserPass} />
    </div>
  );
};

export default HomePage;
