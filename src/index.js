import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
  return <div className="App">APP</div>;
  // return <div>APP</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <div>
      <Link to="/">首页</Link> |<Link to="/login">登录</Link> |
      <Link to="/register">注册</Link> |<Link to="/wellcome">欢迎</Link>
      <Route path="/" exact component={App} />
      <Route path="/login" component={Box2} />
      <Route path="/register" component={Box1} />
      <Route path="/wellcome" component={Box3} />
    </div>
  </Router>,
  rootElement
);
