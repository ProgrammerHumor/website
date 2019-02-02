import * as React from "react";
import { Component } from "react";
import image from "./logo.png";

export interface footerComProps {}

export interface footerComState {}

class footerCom extends React.Component<footerComProps, footerComState> {
  state = {};
  render() {
    return (
      <div className="footer">
        <img src={image} />
        <h2 className="ui medium inverted header">Hi</h2>
      </div>
    );
  }
}

export default footerCom;
