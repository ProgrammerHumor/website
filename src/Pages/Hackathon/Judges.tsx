import AdminsProfiles from "./AdminsProfileContainer";
import React, { Component } from "react";
import { Header, Grid, Button } from "semantic-ui-react";
import { HashLink as Link } from 'react-router-hash-link';

export default class Judges extends Component {
  render = () => (
    <div id="Judges">
      <div>
        <Header className="theme">Judges:</Header>
        <AdminsProfiles/>
      </div>
    </div>
  );
}
