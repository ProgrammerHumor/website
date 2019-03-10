import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";

export default class Theme extends Component<any>  {
  render() {
    return (
      <div>
        <Header className="theme">The Hackathon Theme is:</Header>
        <Header className="overeng">Overengineering</Header>
        <Header className="themeDesc">Come up with programs that make trivial actions complicated!</Header>
      </div>
    )
  }
}