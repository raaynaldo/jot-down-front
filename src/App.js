import { useState, useEffect, useContext } from "react";
import Home from "./containers/Home/Home";
import PrivateRoute from "./PrivateRoute";
import Login from "./components/Login.js/Login";
import SignUp from "./components/SignUp/SignUp";
import { Switch, Route, Redirect } from "react-router-dom";
import DarkModeButton from "./components/DarkModeButton/DarkModeButton";
import AuthContext from "./context/auth/authContext";

const App = () => {
  const isColorSchemeDark = window.matchMedia("(prefers-color-scheme: dark)")
    .matches;
  const [isDark, setIsDark] = useState(isColorSchemeDark);

  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/" exact component={Home} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
        <DarkModeButton setIsDark={setIsDark} isDark={isDark} />
      </div>
    </div>
  );
};

export default App;
