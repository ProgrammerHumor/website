import * as React from "react";
import { Component } from "react";
import AdminsProfiles from "./AdminsProfileContainer";
import "./AbousUsStyle.css";

interface AboutUsProps {}

export interface AboutUsState {}

class AboutUs extends React.Component<AboutUsProps, AboutUsState> {
  state = {};
  render() {
    return (
      <div className="AboutUsWholePage">
        <AdminsProfiles />
      </div>
    );
  }
}

export default AboutUs;
