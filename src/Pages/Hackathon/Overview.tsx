import React, { Component } from "react";
// import anime from 'animejs';
import { Icon, Header, Button, Grid, Segment, Responsive } from "semantic-ui-react";
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
      }}/>
      <div className="intro">
        <div>
          <Grid stackable columns="equal" divided>
          <Grid.Row>
            <Grid.Column>
              <Header className="humDesc">
                The Hackathon dedicated to making you laugh
              </Header>
              <Countdown date={new Date("2019-08-01T00:00:00")} />
              <Header className="date">August 1st to August 30th</Header>
              <Header inverted>Join our discord for updates!</Header>
              <div className="footerButton">
              <Button
                href="https://discord.gg/UuYDUSX"
                icon
                color="red"
                size="massive"
              >
                <Icon name="discord" />
              </Button>
              </div>
              <div className="signUpButton">
                <Button href="mailto:sponsors@programmerhumor.org" size="huge" fluid color="vk">
                  <h2 className="bold">Sponsor The Event</h2>
                </Button>
              </div>
            <Button as={Link} smooth to="/Hackathon#Theme" className="scrollDown" id="mobileDropDown" circular icon="chevron down" />
            </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
      <Responsive {...Responsive.onlyComputer}>
        <Button as={Link} smooth to="/Hackathon#Theme" className="scrollDown" circular icon="chevron down" />
      </Responsive>
    </div >
  );
}
