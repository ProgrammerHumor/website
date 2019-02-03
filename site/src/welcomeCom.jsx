import React, { Component } from "react";
import { text } from "./paraForWelcome.json";
class welcome extends Component {
  state = {
    paraGraph: ""
  };
  render() {
    return (
      <div>
        <h1 className="ui massive inverted header">
          Welcome To Programing Humour!
        </h1>
        <h4 className="ui inverted header">{text}</h4>
      </div>
    );
  }
}

export default welcome;
