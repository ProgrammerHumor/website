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
              <Header size="medium" inverted>Don't be an Asshole</Header>
              <div className="prizeDesc">Please be nice to each other. This is mainly for fun and there is no reason to bring any hate into the Hackathon. As always, remember the human.</div>
            </Grid.Column>
            <Grid.Column>
              <Header size="medium" inverted>Maximum team of 4</Header>
              <div className="prizeDesc">To keep things somewhat fair, we unfortunately have to have a cap on team size.</div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Button as={Link} smooth to="/Hackathon#FAQ" className="scrollDown" circular icon="chevron down" />
      </div>
    </div>
  );
}
