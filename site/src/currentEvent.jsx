import React, { Component } from "react";
import { text } from "./paraForCurrentEvent.json";
class currentEvent extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="ui inverted header">Current Event</h1>
        <h4 className="ui inverted medium header">{text}</h4>
        <a
          className="ui small blue header"
          target="_blank"
          href="https://www.reddit.com/r/ProgrammerHumor/"
        >
          Learn More Here!
        </a>
      </div>
    );
  }
}

export default currentEvent;
