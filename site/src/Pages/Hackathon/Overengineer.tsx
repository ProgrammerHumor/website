import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";

export default class Overengineer extends Component<any>  {
  render() {
    return (
      <Container fluid>
        <Header className="theme">Theme:</Header>
        <Header className="overeng">Overengineering</Header>
      </Container>
    )
  }
}