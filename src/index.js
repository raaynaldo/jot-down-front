import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AuthState from "./context/auth/AuthState";
import App from "./App";
import axios from "./axios";
import { BrowserRouter as Router } from "react-router-dom";

axios();
ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <Router>
        <App />
      </Router>
    </AuthState>
  </React.StrictMode>,
  document.getElementById("root")
);
