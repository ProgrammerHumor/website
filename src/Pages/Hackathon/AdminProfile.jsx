import React, { Component } from "react";
import "./AbousUsStyle.css";
import {
  Icon,
  Image,
  Button,
  Header,
  Responsive
} from "semantic-ui-react";

class AdminProfile extends Component {
  state = {
    highlighted: false,
    classNameForDiv: "paddingForDiv",
    paraToDisplay: "",
    clickedIsTure: false,
    highlightForImageBorder: "",
    highlightForOtherHalfBorder: "forAdminProfileTitle forAdminProfileTextArea"
  };

  render() {
    return (
      <div>
        <Responsive {...Responsive.onlyComputer}>
          <div
            onClick={this.whenClicked}
            onMouseLeave={this.unHighlightBox}
            onMouseOver={this.highlightBox}
            className={this.state.classNameForDiv}
          >
            <div>
              <Image
                className={this.state.highlightForImageBorder}
                src={this.props.img}
              />
            </div>
            <div className={this.state.highlightForOtherHalfBorder}>
              <Header inverted size="large">
                {this.props.name}
              </Header>
              <div>
                <Header color="grey">{this.props.title}</Header>
              </div>
              <div>
                <Header size="medium" inverted>
                  {this.state.paraToDisplay}
                </Header>
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
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
          <div
            onClick={this.whenClicked}
            onMouseLeave={this.unHighlightBox}
            onMouseOver={this.highlightBox}
            className={this.state.classNameForDiv}
          >
            <div>
              <Image
                className={this.state.highlightForImageBorder}
                src={this.props.img}
              />
            </div>
            <div className={this.state.highlightForOtherHalfBorder}>
              <Header inverted size="large">
                {this.props.name}
              </Header>
              <div>
                <Header color="grey">{this.props.title}</Header>
              </div>
              <div>
                <Header size="medium" inverted>
                  {this.state.paraToDisplay}
                </Header>
              </div>
              <div className="forAdminProfileIcons">
                <div className="forAdminProfileIcon">
                  <Button
                    icon
                    circular
                    inverted
                    size="tiny"
                    target="_blank"
                    href={this.props.redditLink}
                  >
                    <Icon className="reddit medium icon" />
                  </Button>
                </div>
                <div className="forAdminProfileIcon">
                  <Button
                    icon
                    circular
                    inverted
                    size="tiny"
                    target="_blank"
                    href={this.props.discordLink}
                  >
                    <Icon className="discord medium icon" />
                  </Button>
                </div>
                <div className="forAdminProfileIcon">
                  <Button
                    icon
                    circular
                    inverted
                    size="tiny"
                    target="_blank"
                    href={this.props.gitHubLink}
                  >
                    <Icon className="github medium icon" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Responsive>
      </div>
    );
  }
}

export default AdminProfile;