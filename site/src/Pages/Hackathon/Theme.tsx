import React, { Component } from "react";
import { Button, Header } from "semantic-ui-react";
import { HashLink as Link } from 'react-router-hash-link';

export default class Theme extends Component {
  render = () => (
    <div id="Theme" className="themeBox">
      <div>
        <Header className="theme">Theme</Header>
        <Header className="overeng">Overengineering</Header>
        <Header className="themeDesc">
          Come up with programs that make trivial actions complicated!
      </Header>
        <Button as={Link} smooth to="/Hackathon#Sponsors" className="scrollDown" circular icon="chevron down" />
      </div>
    </div>
  );
}
