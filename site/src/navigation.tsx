import React, { Component } from "react";
import "./App.css";
import NavBar from "./navBar";
import Footer from "./footer";
import HomePage from "./homePage";
import { withRouter, Route, Redirect, Switch } from "react-router-dom";

const Home = () => <HomePage />;
const AboutUs = () => <></>;
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
        <div className="forNavBar">
          <NavBar leftItems={leftItems} changeRoute={this.changeRoute}>
            <Switch>
              <Route path="/Home" exact component={Home} />
              <Route path="/AboutUs" component={AboutUs} />
              <Route path="/Hackathon" component={Hackathon} />
              <Route path="/Blog" component={Hackathon} />
              <Route path="/Merch" component={Hackathon} />
              <Route path="/" render={() => <Redirect to="/Home" />} />
            </Switch>
            <div className="forFooter">
              <Footer />
            </div>
          </NavBar>
        </div>
      </div>
    );
  }
}

export default withRouter(Navigation);
