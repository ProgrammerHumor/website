import React, { Component } from "react";
import { Icon, Header, Button, Grid, Segment, Responsive } from "semantic-ui-react";
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
              <Responsive {...Responsive.onlyComputer}>
                <Header inverted style={{fontSize: "8em"}}>The Event Has Begun!</Header>
              </Responsive>
              <Responsive {...Responsive.onlyMobile}>
                <Header inverted style={{fontSize: "4em"}}>The Event Has Begun!</Header>
              </Responsive>
              <Header className="date">August 1st to August 31th</Header>
              <Header inverted>Join our Discord and watch us on Twitch!</Header>
              <div className="footerButton">
              <Button
                href="https://discord.gg/ph"
                icon
                color="blue"
                size="massive"
              >
                <Icon name="discord" />
              </Button>
              <Button
                href="https://www.twitch.tv/programmerhumor"
                icon
                color="purple"
                size="massive"
              >
                <Icon name="twitch" />
              </Button>
              </div>
              <div className="signUpButton">
                <Button href="https://forms.gle/KnbNsP5MvbV7ctii8" size="huge" fluid color="vk">
                  <h2 className="bold">Submit Your Entry</h2>
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
