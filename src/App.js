<<<<<<< HEAD
import React from "react";
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Helmet from "react-helmet";
import ProfilePage from "./ProfilePage";

const App = () => (
  <div>
    <Helmet
      title="Twitter. It's what's happening."
      meta={[
        {
          name: "description",
          content:
            "From breaking news and entertainment to sports and politics, get the full story with all the live commentary."
        }
      ]}
    />
    <Router>
      <Switch>
        <Route path="/everyinteract" component={ProfilePage} />
        <Redirect from="/" to="/everyinteract" />
      </Switch>
    </Router>
  </div>
);
=======
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
>>>>>>> master

export default App;
