import React, { Component } from "react";
import Theme from './Theme';
import Overview from './Overview';
import Sponsors from './Sponsors';
import Prizes from './Prizes';
import FAQ from './FAQ';
import Rules from './Rules';
import CanvasForOverview from './canvasForOverview';
import './Hackathon.css'
import { Container } from "semantic-ui-react";

export default class HackathonPage extends Component<any>  {
  render() {
    return (
      <div>
        <div className="divForOverview">
          <CanvasForOverview />
        </div>
        <Overview />
        <Theme />
        <Sponsors />
        <Prizes />
        <Rules />
        <FAQ />
      </div>
    )
  }
}