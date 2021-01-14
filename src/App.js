import Navbar from "./components/Navbar/Navbar";
import Main from "./containers/Main/Main";
import Login from "./components/Login.js/Login";
import SignUp from "./components/SignUp/SignUp";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" exact>
          <Navbar></Navbar>
          <Main></Main>
        </Route>
      </Switch>
      <button>Click</button>
    </div>
  );
};

export default App;
