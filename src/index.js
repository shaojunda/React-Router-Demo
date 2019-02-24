import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { Router, Route, Link } from "react-router";

import "./styles.css";

function Box1() {
  return <div class="box">注册</div>;
}

function Box2() {
  return <div class="box">登录</div>;
}

function Box3() {
  return <div class="box">欢迎</div>;
}

function App() {
  // let hash = window.location.hash;
  // let initUi = hash === "#register" ? "register" : "login";
  let pathName = window.location.pathname;
  let initUi = ""; //pathName === "/register" ? "/register" : "/login";
  switch (pathName) {
    case "/register":
      initUi = "register";
      break;
    case "login":
      initUi = "login";
      break;
    case "wellcom":
      initUi = "welcome";
      break;
    default:
      initUi = "login";
  }
  let [ui, setUi] = useState(initUi);
  let onClickLogin = () => {
    setUi("login");
    // window.location.hash = "login";
    window.history.pushState(null, "", "/login");
  };
  let onClickRegister = () => {
    setUi("register");
    // window.location.hash = "register";
    window.history.pushState(null, "", "/register");
  };
  let onClickWellcome = () => {
    setUi("welcome");
    // window.location.hash = "register";
    window.history.pushState(null, "", "/welcome");
  };

  let showUi = () => {
    switch (ui) {
      case "login":
        return <Box2 />;
      case "register":
        return <Box1 />;
      case "welcome":
        return <Box3 />;
      default:
        return <Box1 />;
    }
  };
  return (
    <div className="App">
      <button onClick={onClickLogin}>登录</button>
      <button onClick={onClickRegister}>注册</button>
      <button onClick={onClickWellcome}>欢迎</button>
      <div>{showUi()}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
