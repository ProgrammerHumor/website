import React, { Component } from "react";
import { Button, Header, Grid, Image, Responsive } from "semantic-ui-react";
import jetbrains from "../../images/Sponsors/jetbrains-grayscale.png";
import digitalOceans from "../../images/Sponsors/DO_Logo_icon_blue.svg";

export default class Theme extends Component {
  render = () => (
    <div id="Sponsors">
      <div>
        <Responsive {...Responsive.onlyComputer}>
        <Grid verticalAlign="middle" stackable columns="10">
          <Grid.Row>
          <Grid.Column/>
          <Grid.Column/>
          <Grid.Column/>
          <Grid.Column/>
            <Grid.Column>
              <Image href="https://www.jetbrains.com/" src={jetbrains} size="small" centered/>
            </Grid.Column>
            <Grid.Column>
              <Image href="https://www.digitalocean.com/" src={digitalOceans} size="small" centered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
        <Grid verticalAlign="middle" stackable columns="equal">
          <Grid.Row>
              <Image href="https://www.jetbrains.com/" src={jetbrains} size="tiny" centered/>
              <Image href="https://www.digitalocean.com/" src={digitalOceans} size="tiny" centered/>
          </Grid.Row>
        </Grid>
        </Responsive>
      </div>
    </div>
  );
}
