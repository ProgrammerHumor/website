import React, { Component } from "react";
// import anime from 'animejs';
import { Container, Header, Button, Grid, Segment } from "semantic-ui-react";
import Countdown from "./Countdown";
import { HashLink as Link } from "react-router-hash-link";

export default class Overview extends Component {
  render = () => (
    <div>
      <a id="Overview" style={{
        display: 'block',
        position: 'absolute',
        top: '0',
        visibility: 'hidden'
      }}></a>
    <div className="intro">
      <div>
        <Header className="humHack">Hackathon</Header>
        <Grid stackable columns="equal" divided>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment basic>
              <Header className="humDesc">
                The Hackathon dedicated to making you laugh
              </Header>
            </Segment>
            <Segment basic>
              <Countdown date={new Date("2019-07-01T00:00:00")} />
            </Segment>
            <Segment basic>
              <Header className="date">July 1st to July 30th</Header>
            </Segment>
            <Segment basic>
            <div className="signUpButton">
              <Button size="huge" fluid color="vk">
                <h2 className="bold">Sign Up</h2>
              </Button>
            </div>
            </Segment>
          </Grid.Column>
          </Grid.Row>
        </Grid>
        <Button as={Link} smooth to="/Hackathon#Theme" className="scrollDown" circular icon="chevron down" />
      </div>
      </div>
    </div >
  );
}
