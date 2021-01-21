import Navbar from "../../components/Navbar/Navbar";
import Main from "../Main/Main";

const Home = (props) => {
  return (
    <div className="w-full">
      <Navbar history={props.history} />
      <Main />
    </div>
  );
};

export default Home;
