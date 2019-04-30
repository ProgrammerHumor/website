import React, { Component } from "react";
import "../App.css";
import NavBar from "./NavBar";
import Footer from "../Footer/footer";
import HomePage from "../Pages/HomePage/homePage";
import HackathonPage from '../Pages/Hackathon/Hackathon'
import { Link, Route, Redirect, Switch } from "react-router-dom";
import { Responsive } from "semantic-ui-react";

const Home = () => <HomePage />;
const Hackathon = () => <HackathonPage />;
const Blog = () => <></>;

class Navigation extends Component {

  
  render() {
    return (
      <div className="App">
        <Responsive {...Responsive.onlyMobile}>
          <div className={"MobilePageBackground"}>
            <NavBar>
              <Switch>
                <Route path="/Home" exact component={Home} />
                <Route path="/Hackathon" component={Hackathon} />
                <Route path="/Blog" component={Blog} />
                <Route path="/" render={() => <Redirect to="/Home" />} />
              </Switch>
            </NavBar>
            <div className="forFooterBackgroundMobile">
              <Footer />
            </div>
          </div>
        </Responsive>
        <Responsive {...Responsive.onlyComputer}>
          <div className="pageBackground">
            <NavBar>
              <Switch>
                <Route path="/Home" exact component={Home} />
                <Route path="/Hackathon" component={Hackathon} />
                <Route path="/Blog" component={Blog} />
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
