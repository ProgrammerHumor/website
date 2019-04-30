import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navigation from "./NavBar/Navigation";

class App extends Component {
  render = () => (
    <Router>
      <Navigation />
    </Router>
  );
}

export default App;
