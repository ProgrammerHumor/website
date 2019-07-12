import React, { Component } from "react";
import { Header, Grid, Responsive } from "semantic-ui-react";
import { HashLink as Link } from 'react-router-hash-link';

export default class Prizes extends Component {
  render = () => (
    <div id="Prizes">
      <div>
        <Header className="theme">Prizes</Header>
        <Responsive {...Responsive.onlyComputer}>
        <Grid stackable columns="5" divided>
          <Grid.Row>
            
              <Grid.Column/>
            
            <Grid.Column>
              <div className="prizeBox" id="firstPlace">
                <img style={{marginTop:"-4px"}} src="https://img.icons8.com/color/48/000000/gold-medal.png"/>
                <Header style= {{marginTop: "3px"}} size="medium" inverted>1st place</Header>
                <div className="prizeDesc">TBD</div>
              </div>
            </Grid.Column>
            <Grid.Column>
            <div className="prizeBox" id="secondPlace">
              <img style={{marginTop:"-4px"}} src="https://img.icons8.com/color/48/000000/olympic-medal-silver.png"/>
              <Header style= {{marginTop: "3px"}} size="medium" inverted>2nd place</Header>
              <div className="prizeDesc">TBD</div>
            </div>
            </Grid.Column>
            <Grid.Column>
            <div className="prizeBox" id="thirdPlace">
              <img style={{marginTop:"-4px"}} src="https://img.icons8.com/color/48/000000/olympic-medal-bronze.png"/>
              <Header style= {{marginTop: "3px"}} size="medium" inverted>3rd place</Header>
              <div className="prizeDesc">TBD</div>
            </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
        <Grid stackable columns="5" divided>
          <Grid.Row>
            
            
            <Grid.Column>
              <div className="prizeBox" id="firstPlace">
                <img style={{marginTop:"-4px"}} src="https://img.icons8.com/color/48/000000/gold-medal.png"/>
                <Header style= {{marginTop: "3px"}} size="medium" inverted>1st place</Header>
                <div className="prizeDesc">TBD</div>
              </div>
            </Grid.Column>
            <Grid.Column>
            <div className="prizeBox" id="secondPlace">
              <img style={{marginTop:"-4px"}} src="https://img.icons8.com/color/48/000000/olympic-medal-silver.png"/>
              <Header style= {{marginTop: "3px"}} size="medium" inverted>2nd place</Header>
              <div className="prizeDesc">TBD</div>
            </div>
            </Grid.Column>
            <Grid.Column>
            <div className="prizeBox" id="thirdPlace">
              <img style={{marginTop:"-4px"}} src="https://img.icons8.com/color/48/000000/olympic-medal-bronze.png"/>
              <Header style= {{marginTop: "3px"}} size="medium" inverted>3rd place</Header>
              <div className="prizeDesc">TBD</div>
            </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Responsive>
      </div>
    </div>
  );
}
