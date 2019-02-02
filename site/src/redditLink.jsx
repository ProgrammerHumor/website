import React, { Component } from "react";
import redditImage from "./redditImage.png";
class linkForReddit extends Component {
  state = {};
  render() {
    return (
      <div>
        <a
          className="ui large blue header"
          onClick={this.handleClick}
          style={{ cursor: "pointer" }}
          target="_blank"
          href="https://www.reddit.com/r/ProgrammerHumor/"
        >
          Link To Reddit
        </a>
        {/* <img src={redditImage} /> */}
      </div>
    );
  }
  handleClick = () => {
    console.log("Hello World");
  };
}

export default linkForReddit;
