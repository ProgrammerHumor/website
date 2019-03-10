import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar/navBar";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Navigation from "./NavBar/navigation";

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
      </Router>
    );
  }
}

export default App;
