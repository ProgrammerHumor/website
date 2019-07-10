import React, { Component } from "react";
import { Header, Grid, Button } from "semantic-ui-react";
import { HashLink as Link } from 'react-router-hash-link';

export default class Prizes extends Component {
  render = () => (
    <div id="Prizes">
      <div>
        <Header className="theme">Prizes:</Header>
        <Grid stackable columns="equal" divided>
          <Grid.Row>
            <Grid.Column>
              <Header size="medium" inverted>1st place</Header>
              <div className="prizeDesc">TBD</div>
            </Grid.Column>
            <Grid.Column>
              <Header size="medium" inverted>2nd place</Header>
              <div className="prizeDesc">TBD</div>
            </Grid.Column>
            <Grid.Column>
              <Header size="medium" inverted>3rd place</Header>
              <div className="prizeDesc">TBD</div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}
