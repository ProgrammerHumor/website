import React, { Component } from "react";
import Theme from './Theme';
import Overview from './Overview';
import Sponsors from './Sponsors';
import Prizes from './Prizes';
import FAQ from './FAQ';
import Rules from './Rules';
import CanvasForOverview from './CanvasForOverview';
import './Hackathon.css'

export default class HackathonPage extends Component {
  render = () => (
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
  );
}