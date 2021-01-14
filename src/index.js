import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from "./axios";
import { BrowserRouter as Router } from "react-router-dom";

axios();
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
