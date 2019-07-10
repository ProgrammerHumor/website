import React, { Component } from "react";
import { Button, Header, Grid, Image } from "semantic-ui-react";
import { HashLink as Link } from 'react-router-hash-link';
import jetbrains from "../../images/jetbrains-grayscale.png";

export default class Theme extends Component {
  render = () => (
    <div id="Sponsors">
      <div>
        <Grid verticalAlign="middle" stackable columns="equal" divided>
          <Grid.Row>
            <Grid.Column>
              <Image src={jetbrains} size="medium" centered/>
            </Grid.Column>
            <Grid.Column>
              <Image src={jetbrains} size="medium" centered/>
            </Grid.Column>
            <Grid.Column>
              <Image src={jetbrains} size="medium" centered/>
            </Grid.Column>
            <Grid.Column>
              <Image src={jetbrains} size="medium" centered/>
            </Grid.Column>
            <Grid.Column>
              <Image src={jetbrains} size="medium" centered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}
