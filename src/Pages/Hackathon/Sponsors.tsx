import React, { Component } from "react";
import { Button, Header, Grid, Image } from "semantic-ui-react";
import { HashLink as Link } from 'react-router-hash-link';
import jetbrains from "../../images/jetbrains-grayscale.png";

export default class Theme extends Component {
  render = () => (
    <div id="Sponsors" className="themeBox">
      <div>
        <Header className="theme">Sponsors</Header>
        <Grid verticalAlign="middle" stackable columns="equal" divided>
          <Grid.Row>
          <Grid.Column>
            <Header size="medium" inverted>Jetbrains</Header>
            <Image src={jetbrains} size="medium" centered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Button as={Link} smooth to="/Hackathon#Prizes" className="scrollDown" circular icon="chevron down" />
      </div>
    </div>
  );
}
