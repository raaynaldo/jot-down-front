import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./containers/Main/Main";
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
      <div className="h-screen bg-white dark:bg-gray-900">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" exact>
            <Navbar></Navbar>
            <Main></Main>
          </Route>
        </Switch>
        <DarkModeButton setIsDark={setIsDark} isDark={isDark} />
      </div>
    </div>
  );
};

export default App;
