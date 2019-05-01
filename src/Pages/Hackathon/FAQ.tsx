import React, { Component } from "react";
import { Header, Grid, Button } from "semantic-ui-react";
import { HashLink as Link } from 'react-router-hash-link';

export default class FAQ extends Component {
  render = () => (
    <div id="FAQ" className="themeBox">
      <div>
        <Header className="theme">Frequantly asked questions:</Header>
        <Grid stackable columns="equal" divided>
          <Grid.Row>
            <Grid.Column>
              <Header size="medium" inverted>What is a hackathon?</Header>
              <div className="prizeDesc">A Hackathon is an event, typically lasting several days, in which numerous people meet to engage in collaborative computer programming.</div>
            </Grid.Column>
            <Grid.Column>
              <Header size="medium" inverted>How can one register?</Header>
              <div className="prizeDesc">You can register on this page, just under the countdown.</div>
            </Grid.Column>
            <Grid.Column>
              <Header size="medium" inverted>How can one submit project?</Header>
              <div className="prizeDesc">Ipsum incididunt fugiat quis fugiat id labore eu ipsum. Est non eu laborum ipsum anim incididunt cillum in laborum anim. Dolore reprehenderit proident proident ex amet et ea cillum mollit nulla qui nisi aute laboris. Occaecat id minim in sit exercitation deserunt sit id est cillum adipisicing minim laboris. Dolor tempor incididunt sunt non deserunt labore ad. Incididunt eiusmod laboris occaecat in anim deserunt id id. Veniam enim cupidatat duis nisi.</div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header size="medium" inverted>How will projects be marked?</Header>
              <div className="prizeDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </Grid.Column>
            <Grid.Column>
              <Header size="medium" inverted>How can teams be formed?</Header>
              <div className="prizeDesc">You may invite your friends, but you also have a high chance of finding people on our Reddit or Discord. You can also go solo, but as long as team.length &lt;= 4 evals to true.</div>
            </Grid.Column>
            <Grid.Column>
              <Header size="medium" inverted>Where can one ask for additional info?</Header>
              <div className="prizeDesc">You can ask either on subreddit - with the Hackathon flair or on our Discord. We recommend joining the Discord since there would be a more active mod presence.</div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Button as={Link} smooth to="/Hackathon#Overview" className="scrollDown" circular icon="chevron up" />
      </div>
    </div>
  );
}