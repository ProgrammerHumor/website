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
            {this.props.name}
          </Header>
          <div>
            <Header color="grey">{this.props.title}</Header>
          </div>
          <div className="forAdminProfileIcons">
            <div className="forAdminProfileIcon">
              <Button
                icon
                circular
                inverted
                size="small"
                target="_blank"
                href={this.props.redditLink}
              >
                <Icon className="reddit large icon" />
              </Button>
            </div>
            <div className="forAdminProfileIcon">
              <Button
                icon
                circular
                inverted
                size="small"
                target="_blank"
                href={this.props.discordLink}
              >
                <Icon className="discord large icon" />
              </Button>
            </div>
            <div className="forAdminProfileIcon">
              <Button
                icon
                circular
                inverted
                size="small"
                target="_blank"
                href={this.props.gitHubLink}
              >
                <Icon className="github large icon" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminProfile;
