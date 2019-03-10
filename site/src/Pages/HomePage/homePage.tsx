import * as React from "react";
import { Component } from "react";
import "./Welcome/WelcomeStyle.css";
import "./BottomHalfOfPageStyle.css";
import "../../Footer/FooterStyle.css";
import WelcomeCom from "./Welcome/welcomeCom";
import RedditLink from "./RedLink/redditLink";
import CurrentEvent from "./CurrEvent/currentEvent";
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive,
  Button
} from "semantic-ui-react";

interface homePageProps { }
export interface homePageState { }

class homePage extends React.Component<homePageProps, homePageState> {
  state = {};

  render() {
    return (
      <div>
        <Responsive {...Responsive.onlyComputer}>
          <div className="HomePageBackground">
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
          <div className="Welcome">
            <div className="mobileWelcomeText">
              <WelcomeCom />
            </div>
          </div>
          <div className="forMarginMobile">
            <div className="mobileBottomHalfComL">
              <RedditLink />
            </div>
            <div className="mobileBottomHalfComR">
              <CurrentEvent />
            </div>
          </div>
          <Responsive {...Responsive.onlyMobile} />
        </Responsive>
      </div>
    );
  }
}

export default homePage;
