import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './navBar';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Navigation from './navigation';

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation></Navigation>
      </Router>
    );
  }
}

export default App;
