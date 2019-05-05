import React, { Component } from "react";
import {Link} from 'react-router-dom'
import { text } from "./paraForCurrentEvent.json";

class currentEvent extends Component {
  state = {};
  render() {
    return (
      <div className="forCurrentEvent">
        <h1 className="ui inverted header">Current Event</h1>
        <h4 className="ui inverted medium header">{text}</h4>
        <Link
          className="ui medium blue header"
          to="/Hackathon"
        >
          Learn More Here!
        </Link>
      </div>
    );
  }
}
export default currentEvent;
