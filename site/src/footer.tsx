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
  Button,
  Header
} from "semantic-ui-react";
import logo from "./logo.png";

interface footerComProps {
  changeRoute: Function;
}

export interface footerComState { }

class footerCom extends React.Component<footerComProps, footerComState> {
  state = {
    iconStyleDiscord: "discord inverted big icon",
    iconStyleReddit: "reddit inverted big icon",
    iconStyleGithub: "github inverted big icon",
    iconOverStyleDiscord: "",
    iconOverStyleReddit: "",
    iconOverStyleGithub: ""
  };

  goHome = () => {
    this.props.changeRoute("/Home");
  };
  goAboutUs = () => {
    this.props.changeRoute("/AboutUs");
  };
  goHackathon = () => {
    this.props.changeRoute("/Hackathon");
  };
  goToReddit = () => {
    window.location.href = "https://www.reddit.com/r/ProgrammerHumor/";
  };
  goToDiscord = () => {
    window.location.href = "https://discordapp.com/activity";
  };
  goToGithub = () => {
    window.location.href = "https://github.com/";
  };
  forMouseOverDiscord = () => {
    this.setState({
      iconOverStyleDiscord: " blue"
    });
  };
  forMouseOverGithub = () => {
    this.setState({
      iconOverStyleGithub: " blue"
    });
  };
  forMouseOverReddit = () => {
    this.setState({
      iconOverStyleReddit: " blue"
    });
  };
  forLeaveOverDiscord = () => {
    this.setState({
      iconOverStyleDiscord: ""
    });
  };
  forLeaveOverGithub = () => {
    this.setState({
      iconOverStyleGithub: ""
    });
  };
  forLeaveOverReddit = () => {
    this.setState({
      iconOverStyleReddit: ""
    });
  };
  render() {
    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <div className="mobileFooter">
            <Button
              href="https://www.google.ca"
              icon
              color="black"
              size="large"
            >
              <i className="reddit large icon" />
            </Button>
            <Button
              href="https://www.google.ca"
              icon
              color="black"
              size="large"
            >
              <i className="github large icon" />
            </Button>
            <Button
              href="https://www.google.ca"
              icon
              color="black"
              size="large"
            >
              <i className="discord large icon" />
            </Button>
          </div>
        </Responsive>
        <Responsive {...Responsive.onlyComputer}>
          <div className="footer">
            {/* <Button.Group className="fiftyWidth"> */}
            <div className="footerButton">
              <Button
                href="https://www.google.ca"
                icon
                color="black"
                size="massive"
                onMouseOver={this.forMouseOverReddit}
                onMouseLeave={this.forLeaveOverReddit}
              >
                <i className={"reddit large icon" + this.state.iconOverStyleReddit} />
              </Button>
              <Button
                href="https://www.google.ca"
                icon
                color="black"
                size="massive"
                onMouseOver={this.forMouseOverGithub}
                onMouseLeave={this.forLeaveOverGithub}
              >
                <i className={"github large icon" + this.state.iconOverStyleGithub} />
              </Button>
              <Button
                href="https://www.google.ca"
                icon
                color="black"
                size="massive"
                onMouseOver={this.forMouseOverDiscord}
                onMouseLeave={this.forLeaveOverDiscord}
              >
                <i className={"discord large icon" + this.state.iconOverStyleDiscord} />
              </Button>
            </div>
          </div>
          {/* <div className="forFollowUsDiv">
            <Header size="medium" className="forFollowUsFont" color="grey">
              By Programers, For Programers
            </Header>
          </div> */}
        </Responsive>
      </div>
    );
  }
}

export default footerCom;
