import Navbar from "../../components/Navbar/Navbar";
import Main from "../Main/Main";
import { Route, Redirect } from "react-router-dom";
import Profile from "../../components/Profile/Profile";
// import PrivateRoute from "../../PrivateRoute";

const Home = (props) => {
  return (
    <div className="w-full">
      <Navbar history={props.history} />
      <Route path="/profile" exact>
        <Profile />
      </Route>
      <Route path="/" exact component={Main} />
      {/* <Route path="*" render={() => <Redirect to="/" />} /> */}
      {/* <Main /> */}
    </div>
  );
};

export default Home;
