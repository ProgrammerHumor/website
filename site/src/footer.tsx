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

export interface footerComState {}

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
              <i
                onMouseOver={this.forMouseOverReddit}
                onMouseLeave={this.forLeaveOverReddit}
                onClick={this.goToReddit}
                className={
                  this.state.iconStyleReddit + this.state.iconOverStyleReddit
                }
              />
            </div>
            <div className="footerButton">
              <i
                onMouseOver={this.forMouseOverDiscord}
                onMouseLeave={this.forLeaveOverDiscord}
                onClick={this.goToDiscord}
                className={
                  this.state.iconStyleDiscord + this.state.iconOverStyleDiscord
                }
              />
            </div>
            <div className="footerButton">
              <i
                onMouseOver={this.forMouseOverGithub}
                onMouseLeave={this.forLeaveOverGithub}
                onClick={this.goToGithub}
                className={
                  this.state.iconStyleGithub + this.state.iconOverStyleGithub
                }
              />
            </div>

            {/* <Button
                className="footerButtonForImage"
                color={"black"}
                onClick={this.goHome}
              >
                <Image className="footerImg" src={logo} />
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
              </Button> */}
            {/* </Button.Group> */}
          </div>
          <div className="forFollowUsDiv">
            <Header size="medium" className="forFollowUsFont" color="grey">
              By Programers, For Programers
            </Header>
          </div>
        </Responsive>
      </div>
    );
  }
}

export default footerCom;
