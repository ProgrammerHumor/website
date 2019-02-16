import React, { Component } from "react";
import "./AbousUsStyle.css";

import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive,
  Button,
  Header
} from "semantic-ui-react";

class AdminProfile extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="forAdminProfileImg">
          <Image src={this.props.img} />
        </div>
        <div className="forAdminProfileTitle forAdminProfileTextArea">
          <Header inverted size="large">
            {this.props.title}
          </Header>
          <div>
            <Header inverted>{this.props.text}</Header>
          </div>
          <div className="forAdminProfileIcons">
            <div className="forAdminProfileIcon">
              <Icon
                color="instagram"
                className="inverted instagram large icon"
              />
            </div>
            <div className="forAdminProfileIcon">
              <Icon color="discord" className="inverted discord large icon" />
            </div>
            <div className="forAdminProfileIcon">
              <Icon color="github" className="inverted github large icon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminProfile;
