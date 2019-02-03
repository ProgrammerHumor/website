import * as React from "react";
import { Component } from "react";
import WelcomeCom from "./welcomeCom";
import RedditLink from "./redditLink";
import CurrentEvent from "./currentEvent";

export interface homePageProps {}
export interface homePageState {}

class homePage extends React.Component<homePageProps, homePageState> {
  state = {};
  render() {
    return (
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
    );
  }
}

export default homePage;
