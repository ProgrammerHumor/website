import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import 'semantic-ui-css/semantic.min.css'

import Navigation from "./NavBar/Navigation";
import Footer from './Footer/footer';

class App extends Component {
  render = () => (
    <Router>
          <div id="pageBackground" className="desktopPageBackground">
        <Navigation />
        <div className="forFooterBackgroundMobile">
          <Footer />
        </div>
        </div>
    </Router>
  );
}

export default App;
