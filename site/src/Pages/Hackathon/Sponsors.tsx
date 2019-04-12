import React, { Component } from "react";
import { Button, Header, Grid, Image } from "semantic-ui-react";
import { HashLink as Link } from 'react-router-hash-link';

export default class Theme extends Component {
  render = () => (
    <div id="Sponsors" className="themeBox">
      <Header className="theme">Sponsors</Header>
      <Grid stackable columns="equal" divided>
        <Grid.Row>
          <Grid.Column>
            <Image
              centered
              size="huge"
              src="https://www.corsair.com/corsairmedia/sys_master/productcontent/Corsair_logo_1A_black_800px.png"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              centered
              size="small"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/DigitalOcean_logo.svg/1200px-DigitalOcean_logo.svg.png"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Button as={Link} smooth to="/Hackathon#Prizes" className="scrollDown" circular icon="chevron down" />
    </div>
  );
}
