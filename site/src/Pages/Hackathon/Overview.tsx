import React, { Component } from "react";
// import anime from 'animejs';
import { Container, Header, Button } from "semantic-ui-react";
import Countdown from "./Countdown";

export default class Overview extends Component {
  render = () => (
    <div id="Overview" className="intro">
      {/* <canvas id="humBack" className="humBack"></canvas> */}
      <div className="humHackDiv">
        <Header className="humHack">HumorHack</Header>
      </div>
      <div className="countDownTitle">
        <Header className="humDesc">
          The Hackathon dedicated to making you laugh
          </Header>
      </div>
      <Countdown date={new Date("2019-05-01T00:00:00")} />
      <Header className="date">May 1st to May 30th</Header>
      <div className="signUpButton">
        <Button size="huge" fluid color="vk">
          <h2 className="bold">Sign Up</h2>
        </Button>
      </div>
      <Button className="scrollDown" href="/Hackathon#Theme" circular icon="chevron down" />
    </div>
  );
}
