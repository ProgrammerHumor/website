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
    if (document.body.clientWidth <= 700) {
      return (
        <div className="App">
          <div id="pageBackground" className="mobilePageBackground">
            <NavBar>
              <Switch>
                <Route path="/Hackathon" component={Hackathon} />
                <Route path="/" component={Home}/>} />
              </Switch>
            </NavBar>
          </div>
        </div>
      );
    } else {
      return (
        <div className='App'>
            <NavBar>
              <Switch>
                <Route path="/Hackathon" component={Hackathon} />
                <Route path="/" component={Home}/>
              </Switch>
            </NavBar>
          </div>
      );
    }
  }
}

export default Navigation;
