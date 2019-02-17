import React, { Component } from "react";
import "./App.css";
import NavBar from "./navBar";
import Footer from "./footer";
import HomePage from "./homePage";
import About from "./AboutUs";
import { withRouter, Route, Redirect, Switch } from "react-router-dom";
import { Responsive } from "semantic-ui-react";

const Home = () => <HomePage />;
const AboutUs = () => <About />;
const Hackathon = () => <></>;
const Blog = () => <></>;
const Merch = () => <></>;

class Navigation extends Component<any> {
  changeRoute = (route: string) => {
    const { history }: any = this.props;
    history.push(route);
  };
  render() {
    const leftItems = [
      {
        onClick: () => {
          this.changeRoute("/AboutUs");
        },
        as: "a",
        content: "AboutUs",
        key: "AboutUs"
      },
      {
        onClick: () => {
          this.changeRoute("/Hackathon");
        },
        as: "a",
        content: "Hackathon",
        key: "Hackathon"
      },
      {
        onClick: () => {
          this.changeRoute("/Blog");
        },
        as: "a",
        content: "Blog",
        key: "Blog"
      },
      {
        onClick: () => {
          this.changeRoute("/Merch");
        },
        as: "a",
        content: "Merch",
        key: "Merch"
      }
    ];
    return (
      <div className="App">
        <Responsive {...Responsive.onlyMobile}>
          <div className="MobilePageBackground">
            <NavBar leftItems={leftItems} changeRoute={this.changeRoute}>
              <Switch>
                <Route path="/Home" exact component={Home} />
                <Route path="/AboutUs" component={AboutUs} />
                <Route path="/Hackathon" component={Hackathon} />
                <Route path="/Blog" component={Hackathon} />
                <Route path="/Merch" component={Hackathon} />
                <Route path="/" render={() => <Redirect to="/Home" />} />
              </Switch>
            </NavBar>
          </div>
          <div className="forFooter">
            <Footer changeRoute={this.changeRoute} />
          </div>
        </Responsive>
        <Responsive {...Responsive.onlyComputer}>
          <div className="pageBackground">
            <NavBar leftItems={leftItems} changeRoute={this.changeRoute}>
              <Switch>
                <Route path="/Home" exact component={Home} />
                <Route path="/AboutUs" component={AboutUs} />
                <Route path="/Hackathon" component={Hackathon} />
                <Route path="/Blog" component={Hackathon} />
                <Route path="/Merch" component={Hackathon} />
                <Route path="/" render={() => <Redirect to="/Home" />} />
              </Switch>
            </NavBar>
            <div className="forFooterBackground">
              <Footer changeRoute={this.changeRoute} />
            </div>
          </div>
        </Responsive>
      </div>
    );
  }
}

export default withRouter(Navigation);
