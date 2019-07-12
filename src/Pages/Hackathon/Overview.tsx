import React, { Component } from "react";
// import anime from 'animejs';
import { Icon, Header, Button, Grid, Segment } from "semantic-ui-react";
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
        <Grid stackable columns="equal" divided>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment basic>
              <Header className="humDesc">
                The Hackathon dedicated to making you laugh
              </Header>
            </Segment>
            <Segment basic>
              <Countdown date={new Date("2019-08-01T00:00:00")} />
            </Segment>
            <Segment basic>
              <Header className="date">August 1st to August 30th</Header>
            </Segment>
            <Segment basic>
            <Header inverted>Use one of the buttons below for updates!</Header>
            <div className="footerButton">
            <Button
              href="https://discord.gg/7cbeUvC"
              icon
              color="red"
              size="massive"
            >
              <Icon name="discord" />
            </Button>
            <Button
            href="https://www.reddit.com/r/ProgrammerHumor"
            icon
            color="red"
            size="massive"
          >
            <Icon name="reddit" />
          </Button>
          <Button
            href="https://www.reddit.com/r/ProgrammerHumor"
            icon
            color="red"
            size="massive"
          >
            <Icon name="mail" />
          </Button>
            </div>
            <div className="signUpButton">
              <Button size="huge" fluid color="vk">
                <h2 className="bold">Sponsor The Event</h2>
              </Button>
            </div>
            </Segment>
            <Segment basic><Button as={Link} smooth to="/Hackathon#Theme" className="scrollDown" circular icon="chevron down" /></Segment>
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      </div>
    </div >
  );
}
