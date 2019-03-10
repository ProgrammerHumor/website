import * as React from "react";
import { Component } from "react";
import AdminsProfiles from "./AdminProfile/AdminsProfileContainer";
import AboutUsWord from "./AboutUsWords";
import "./AbousUsStyle.css";

interface AboutUsProps { }

export interface AboutUsState { }

class AboutUs extends React.Component<AboutUsProps, AboutUsState> {
  state = {};
  render() {
    return (
      <div>
        <AboutUsWord />
        <AdminsProfiles />
      </div>
    );
  }
}

export default AboutUs;
