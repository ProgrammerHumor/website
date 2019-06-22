import React, { Component } from "react";
import "../App.css";
import NavBar from "./NavBar";
import Footer from "../Footer/footer";
import HomePage from "../Pages/HomePage/HomePage";
import HackathonPage from '../Pages/Hackathon/Hackathon'
import { Route, Redirect, Switch } from "react-router-dom";
import { Responsive } from "semantic-ui-react";

const Home = () => <HomePage />;
const Hackathon = () => <HackathonPage />;

class Navigation extends Component {

  
  render() {
    return (
      <div className="App">
        <Responsive {...Responsive.onlyMobile}>
          <div id="pageBackground" className="mobilePageBackground">
            <NavBar>
              <Switch>
                <Route path="/Home" exact component={Home} />
                <Route path="/Hackathon" component={Hackathon} />
                <Route path="/" render={() => <Redirect to="/Home" />} />
              </Switch>
            </NavBar>
            <div className="forFooterBackgroundMobile">
              <Footer />
            </div>
          </div>
        </Responsive>
        <Responsive {...Responsive.onlyComputer}>
          <div id="pageBackground" className="desktopPageBackground">
            <NavBar>
              <Switch>
                <Route path="/Home" exact component={Home} />
                <Route path="/Hackathon" component={Hackathon} />
                <Route path="/" render={() => <Redirect to="/Home" />} />
              </Switch>
            </NavBar>
            <div className="forFooterBackground">
              <Footer />
            </div>
          </div>
        </Responsive>
      </div>
    );
  }
}

export default Navigation;
