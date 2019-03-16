import React, { Component } from "react";
import { Header, Grid, Image } from "semantic-ui-react";

export default class Prizes extends Component {
  render = () => (
    <div id="Prizes" className="themeBox">
      <Header className="theme">Prizes:</Header>
      <Grid stackable columns="equal" divided>
        <Grid.Row>
          <Grid.Column>
            <Header size="medium" inverted>1st place</Header>
            <div className="prizeDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          </Grid.Column>
          <Grid.Column>
            <Header size="medium" inverted>2nd place</Header>
            <div className="prizeDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          </Grid.Column>
          <Grid.Column>
            <Header size="medium" inverted>3rd place</Header>
            <div className="prizeDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
