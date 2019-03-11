import React, { Component } from "react";
// import anime from 'animejs';
import { Container, Header, Button } from "semantic-ui-react";
import Countdown from './Countdown';

export default class Overview extends Component<any> {
  render() {
    console.log(new Date);
    return (
      <div id="Overview" className="intro">
        {/* <canvas id="humBack" className="humBack"></canvas> */}
        <Header className="humHack">HumorHack</Header>
        <Button color="red" >Sign Up!!!</Button>
        <Header className="humDesc">The Hackathon dedicated to making you laugh</Header>
        <Countdown date={new Date('2019-05-01T00:00:00')} />
        <Header className="date">May 1st to May 30th</Header>
      </div>
    )
  }
}