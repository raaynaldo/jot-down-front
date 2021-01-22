import { useState } from "react";
import Home from "./containers/Home/Home";
import PrivateRoute from "./PrivateRoute";
import Login from "./components/Login.js/Login";
import SignUp from "./components/SignUp/SignUp";
import { Switch, Route } from "react-router-dom";
import DarkModeButton from "./components/DarkModeButton/DarkModeButton";

const App = () => {
  const isColorSchemeDark = window.matchMedia("(prefers-color-scheme: dark)")
    .matches;
  const [isDark, setIsDark] = useState(isColorSchemeDark);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <PrivateRoute path="/" component={Home} />
        </Switch>
        <DarkModeButton setIsDark={setIsDark} isDark={isDark} />
      </div>
    </div>
  );
};

export default App;
