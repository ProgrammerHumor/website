import React, { Component } from "react";
import { Header, Grid, Image } from "semantic-ui-react";

export default class Rules extends Component {
  render = () => (
    <div id="Rules" className="themeBox">
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
    </div>
  );
}