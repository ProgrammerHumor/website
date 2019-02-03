import * as React from "react";
import { Component } from "react";
import WelcomeCom from "./welcomeCom";
import RedditLink from "./redditLink";
import CurrentEvent from "./currentEvent";
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive,
  Button
} from "semantic-ui-react";

export interface homePageProps {}
export interface homePageState {}

class homePage extends React.Component<homePageProps, homePageState> {
  state = {};
  render() {
    return (
      <div>
        <Responsive {...Responsive.onlyComputer}>
          <div className="pageBackground">
            <div className="Welcome">
              <div className="WelcomeCom">
                <WelcomeCom />
              </div>
            </div>
            <div className="bottomHalfOfPage">
              <div className="bottomHalfComL">
                <RedditLink />
              </div>
              <div className="bottomHalfComR">
                <CurrentEvent />
              </div>
            </div>
          </div>
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
          <div className="pageBackground">
            <div className="Welcome">
              <div className="WelcomeCom">
                <WelcomeCom />
              </div>
            </div>
            {/* <div className="mobileBottomHalfOfPage"> */}
            <div className="mobileBottomHalfComL">
              <RedditLink />
            </div>
            <div className="mobileBottomHalfComR">
              <CurrentEvent />
            </div>
            {/* </div> */}
          </div>
        </Responsive>
      </div>
    );
  }
}

export default homePage;
