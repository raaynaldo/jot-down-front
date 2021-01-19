import Navbar from "../../components/Navbar/Navbar";
import Main from "../Main/Main";
import MainProvider from "../../context/main/MainProvider";

const Home = () => {
  return (
    <div className="w-full">
      <MainProvider>
        <Navbar />
        <Main />
      </MainProvider>
    </div>
  );
};

export default Home;
