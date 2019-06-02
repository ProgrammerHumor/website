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
        <Header className="themeDesc">
          Our subreddit has had a far-reaching history of making simple applications impossible to use. In our first Hackathon, you'll join that legacy by creating a program in any language of your choice which is as tedious to use as possible. Command line applications, GUIs, websites or anything else under the sun is permitted. We want creativity.~
          ~
          If you'd like some examples of what to make, go to our subreddit and see posts labeled "Bad UI". 
        </Header>
      
          
        <Button as={Link} smooth to="/Hackathon#Sponsors" className="scrollDown" circular icon="chevron down" />
      </div>
    </div>
  );
}
