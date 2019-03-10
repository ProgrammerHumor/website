import React, { Component } from "react";
import "../App.css";
import NavBar from "./navBar";
import Footer from "../Footer/footer";
import HomePage from "../Pages/HomePage/homePage";
import About from "../Pages/AboutUs/AboutUs";
import HackathonPage from '../Pages/Hackathon/Hackathon'
import { withRouter, Route, Redirect, Switch } from "react-router-dom";
import { Responsive } from "semantic-ui-react";

const Home = () => <HomePage />;
const AboutUs = () => <About />;
const Hackathon = () => <HackathonPage />;
const Blog = () => <></>;

class Navigation extends Component<any> {
  changeRoute = (route: string) => {
    const { history }: any = this.props;
    history.push(route);
  };
  render() {
    const leftItems = [
      // {
      //   onClick: () => {
      //     this.changeRoute("/Hackathon");
      //   },
      //   as: "a",
      //   content: "Hackathon",
      //   key: "Hackathon"
      // },
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
          this.changeRoute("/Blog");
        },
        as: "a",
        content: "Blog",
        key: "Blog"
      },
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
                <Route path="/Blog" component={Blog} />
                <Route path="/" render={() => <Redirect to="/Home" />} />
              </Switch>
            </NavBar>
            <div className="forFooterBackgroundMobile">
              <Footer changeRoute={this.changeRoute} />
            </div>
          </div>
        </Responsive>
        <Responsive {...Responsive.onlyComputer}>
          <div className="pageBackground">
            <NavBar leftItems={leftItems} changeRoute={this.changeRoute}>
              <Switch>
                <Route path="/Home" exact component={Home} />
                <Route path="/AboutUs" component={AboutUs} />
                <Route path="/Hackathon" component={Hackathon} />
                <Route path="/Blog" component={Blog} />
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
