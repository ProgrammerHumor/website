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

export interface footerComProps {}

export interface footerComState {}

class footerCom extends React.Component<footerComProps, footerComState> {
  state = {};
  render() {
    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <div className="mobileFooter">
            <Button icon color="black" size="large">
              <i className="reddit large icon" />
            </Button>
            <img src={image} style={{ width: "15%", height: "4%" }} />
            <Button icon color="black" size="large">
              <i className="discord large icon" />
            </Button>
          </div>
        </Responsive>
        <Responsive {...Responsive.onlyComputer}>
          <div className="footer">
            <Button icon color="black" size="large">
              <i className="reddit large icon" />
            </Button>
            <Button icon color="black" size="large">
              <i className="discord large icon" />
            </Button>
            <Button icon color="black" size="large">
              <i className="github large icon" />
            </Button>
            <img src={image} />
            <Button small color="black">
              Merch
            </Button>
            <Button small color="black">
              Hackathon
            </Button>
            <Button small color="black">
              About Us
            </Button>
          </div>
        </Responsive>
      </div>
    );
  }
}

export default footerCom;
