import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CreateBoard from "./createBoardComponent";
import Routes from "./routes";

import logo from "../media/logo.svg";
import "../stylesheets/App.css";

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import AppReducers from '../reducers/combinedReducers';

let store = createStore(AppReducers);

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div styleName="App">
            <header styleName="App-header">
              <img src={logo} styleName="App-logo" alt="logo" />
              <h1 styleName="App-title">Welcome to React</h1>
            </header>

            <div styleName="main">
              <CreateBoard />
            </div>
            <Routes />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
