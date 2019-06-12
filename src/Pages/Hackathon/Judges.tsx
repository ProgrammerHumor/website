import AdminsProfiles from "./AdminsProfileContainer";
import React, { Component } from "react";
import { Header, Grid, Button } from "semantic-ui-react";
import { HashLink as Link } from 'react-router-hash-link';

export default class Judges extends Component {
  render = () => (
    <div id="Judges" className="themeBox">
      <div>
        <Header className="theme">Judges:</Header>
        <AdminsProfiles/>
        <Button as={Link} smooth to="/Hackathon#Rules" className="scrollDown" circular icon="chevron down" />
      </div>
    </div>
  );
}
