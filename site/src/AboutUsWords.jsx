import React, { Component } from "react";
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

class AboutUsWords extends Component {
  state = {};
  render() {
    return (
      <div>
        <Responsive {...Responsive.onlyComputer}>
          <div className="forAboutUsBottomHalfOfPage">
            <h1 className=" inverted ui header large forAboutUsTitle">
              For Programers, By Programers
            </h1>
            <div className="forAboutUsPara">
              <Header color="grey" size="medium">
                This will be where you can say what the page is all about and
                stuff or whatever this can be deleted its just my first idea.
                Mabey we can do someting else I dont know, but whatever just
                keep swiming swiming swiming.
              </Header>
            </div>
          </div>
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
          <div className="forAboutUsBottomHalfOfPage">
            <h1 className=" inverted ui header large forAboutUsTitle">
              For Programers, By Programers
            </h1>
            <div className="forAboutUsPara">
              <Header color="grey" size="medium">
                This will be where you can say what the page is all about and
                stuff or whatever this can be deleted its just my first idea.
                Mabey we can do someting else I dont know, but whatever just
                keep swiming swiming swiming.
              </Header>
            </div>
          </div>
        </Responsive>
      </div>
    );
  }
}

export default AboutUsWords;
