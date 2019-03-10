import React, { Component } from "react";
import Theme from './Theme';
import HumorHack from './HumorHack';
import './Hackathon.css'
import { Container } from "semantic-ui-react";

export default class HackathonPage extends Component<any>  {
  render() {
    return (
      <div>
        <HumorHack />
        <Theme />
      </div>
    )
  }
}