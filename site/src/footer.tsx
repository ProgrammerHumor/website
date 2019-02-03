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
        <button className="ui small secondary button">Facebook</button>
        <button className="ui secondary button ">Instagram</button>
        <button className="ui secondary button ">Reddit</button>
        <img src={image} />
        <button className="ui secondary button ">Merch</button>
        <button className="ui small secondary button ">Hackathon</button>
        <button className="ui secondary button ">About Us</button>
      </div>
    );
  }
}

export default footerCom;
