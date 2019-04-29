import React, { Component } from "react";
// import anime from 'animejs';
import { Container, Header, Button } from "semantic-ui-react";
import Countdown from "./Countdown";
import { HashLink as Link } from "react-router-hash-link";

export default class Overview extends Component {
  render = () => (
    <div className="intro">
      <a id="Overview" style={{
        display: 'block',
        position: 'absolute',
        top: '0',
        visibility: 'hidden'
      }}></a>
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
      <Button as={Link} smooth to="/Hackathon#Theme" className="scrollDown" circular icon="chevron down" />
    </div >
  );
}
