// import Navbar from "./components/Navbar/Navbar";
// import Main from "./containers/Main/Main";
import Login from "./components/Login.js/Login";
import SignUp from "./components/SignUp/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import MarkdownPreview from "./components/MarkdownPreview/MarkdownPreview";

const App = () => {
  return (
    <div>
      <SignUp/>
      <Login/>
      {/* <Navbar></Navbar>
      <Main></Main> */}
      {/* <MarkdownPreview /> */}
    </div>
  );
};

export default App;
