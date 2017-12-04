import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import CreateBoard from "./createBoardComponent";
import Routes from "./routes";
import logo from "../media/logo.svg";
import "../stylesheets/App.css";
import "../stylesheets/index.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <div className="main">
            <CreateBoard />
          </div>
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
