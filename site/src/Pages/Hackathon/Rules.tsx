import React, { Component } from "react";
import { Header, Grid, Button } from "semantic-ui-react";
import { HashLink as Link } from 'react-router-hash-link';

export default class Rules extends Component {
  render = () => (
    <div id="Rules" className="themeBox">
      <div>
        <Header className="theme">Rules:</Header>
        <Grid stackable columns="equal" divided>
          <Grid.Row>
            <Grid.Column>
              <Header size="medium" inverted>1. Don't be an asshole</Header>
            </Grid.Column>
            <Grid.Column>
              <Header size="medium" inverted>2. Maximum team of 4</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Button as={Link} smooth to="/Hackathon#FAQ" className="scrollDown" circular icon="chevron down" />
      </div>
    </div>
  );
}