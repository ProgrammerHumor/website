import React, { Component } from "react";
import { text } from "./paraForWhatElseWeDo.json";
class linkForReddit extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="ui massive inverted header">
          Aren't you just a subreddit?
        </h1>
        <h4 className="ui medium inverted header"> {text} </h4>
        <a
          className="ui small blue header"
          style={{ cursor: "pointer" }}
          target="_blank"
          href="https://www.reddit.com/r/ProgrammerHumor/"
        >
          But come check us out here!
        </a>
        {/* <img src={redditImage} /> */}
      </div>
    );
  }
}

export default linkForReddit;
