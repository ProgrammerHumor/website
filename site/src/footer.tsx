import * as React from "react";
import { Component } from "react";
import image from "./logo.png";
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive,
  Button
} from "semantic-ui-react";
import logo from "./logo.png";

interface footerComProps {
  changeRoute: Function;
}

export interface footerComState {}

class footerCom extends React.Component<footerComProps, footerComState> {
  state = {};

  goHome = () => {
    this.props.changeRoute("/Home");
  };
  goAboutUs = () => {
    this.props.changeRoute("/AboutUs");
  };
  goHackathon = () => {
    this.props.changeRoute("/Hackathon");
  };
  render() {
    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <div className="mobileFooter">
            <Button icon color="black" size="large">
              <i className="reddit large icon" />
            </Button>
            <Button icon color="black" size="large">
              <i className="github large icon" />
            </Button>
            <Button icon color="black" size="large">
              <i className="discord large icon" />
            </Button>
          </div>
        </Responsive>
        <Responsive {...Responsive.onlyComputer}>
          <div className="footer">
            <Button.Group fluid widths="7" className="fiftyWidth">
              <Button
                icon
                color="black"
                size="massive"
                className="footerButton"
              >
                <i className="reddit large icon" />
              </Button>
              <Button
                icon
                color="black"
                size="massive"
                className="footerButton"
              >
                <i className="discord large icon" />
              </Button>
              <Button
                icon
                color="black"
                size="massive"
                className="footerButton"
              >
                <i className="github large icon" />
              </Button>
              <Button
                size="medium"
                img
                color={"black"}
                className="footerButton"
                onClick={this.goHome}
              >
                <Image size="mini" src={logo} circular />
              </Button>
              <Button
                small
                color="black"
                className="footerButton"
                onClick={this.goHome}
              >
                Merch
              </Button>
              <Button
                small
                color="black"
                className="footerButton"
                onClick={this.goHackathon}
              >
                Hackathon
              </Button>
              <Button
                small
                color="black"
                className="footerButton"
                onClick={this.goAboutUs}
              >
                About Us
              </Button>
            </Button.Group>
          </div>
        </Responsive>
      </div>
    );
  }
}

export default footerCom;
