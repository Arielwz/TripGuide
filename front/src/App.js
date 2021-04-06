import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./Pages/HomePage.js";
import UploadPage from "./Pages/UploadPage.js";
import LoginPage from "./Pages/LoginPage.js";
import RegistPage from "./Pages/RegistPage.js";
import NavigationComponent from "./Components/NavigationComponent.js";

function App() {
  return (
    <Router>
      <NavigationComponent></NavigationComponent>
      <Switch> 
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/regist">
          <RegistPage />
        </Route>
        <Route path="/upload">
          <UploadPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

