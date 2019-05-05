import React, { Component } from "react";
import { Header, Grid, Button } from "semantic-ui-react";
import { HashLink as Link } from 'react-router-hash-link';

export default class FAQ extends Component {
  render = () => (
    <div id="FAQ" className="themeBox">
      <div>
        <Header className="theme">Frequently Asked Questions:</Header>
        <Grid stackable columns="equal" divided>
          <Grid.Row>
            <Grid.Column>
              <Header size="medium" inverted>What is a hackathon?</Header>
              <div className="prizeDesc">It's an event where teams compete by coding!.</div>
            </Grid.Column>
            <Grid.Column>
              <Header size="medium" inverted>How can one register?</Header>
              <div className="prizeDesc"><Link to="/register">Click here</Link></div>
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
              <Header size="medium" inverted>How can I form teams?</Header>
              <div className="prizeDesc">You can invite your friends, or, if you have never heard of those magical creatures, look for people on the subreddit or our Discord server. You can even go solo! Anything works as long as team.length &lt;= 4</div>
            </Grid.Column>
            <Grid.Column>
              <Header size="medium" inverted>Help! I need additional info.</Header>
              <div className="prizeDesc">You can ask either on the subreddit with the Hackathon flair, or on the <Link to="/discord">Discord server</Link>. We recommend joining Discord since you would be more likely to get assistance quickly there.</div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Button as={Link} smooth to="/Hackathon#Overview" className="scrollDown" circular icon="chevron up" />
      </div>
    </div>
  );
}
