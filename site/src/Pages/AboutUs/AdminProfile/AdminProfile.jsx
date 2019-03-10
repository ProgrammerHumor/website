import React, { Component } from "react";
import "../AbousUsStyle.css";
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
  state = {
    highlighted: false,
    classNameForDiv: "paddingForDiv",
    paraToDisplay: "",
    clickedIsTure: false,
    highlightForImageBorder: "",
    highlightForOtherHalfBorder: "forAdminProfileTitle forAdminProfileTextArea"
  };

  highlightBox = () => {
    if (!this.props.isMobile) {
      this.setState({
        classNameForDiv: "forHighlightingPerson",
        highlightForImageBorder: "HighlightImage",
        highlightForOtherHalfBorder:
          "forAdminProfileTitle forAdminProfileTextArea HighlightOtherHalfOfAdmindProfile"
      });
    }
    //console.log(this.state.highlighted);
  };
  unHighlightBox = () => {
    if (!this.props.isMobile) {
      if (!this.state.clickedIsTure) {
        this.setState({
          classNameForDiv: "paddingForDiv",
          highlightForImageBorder: "",
          highlightForOtherHalfBorder:
            "forAdminProfileTitle forAdminProfileTextArea"
        });
      } else {
        this.setState({
          highlightForImageBorder: "",
          highlightForOtherHalfBorder:
            "forAdminProfileTitle forAdminProfileTextArea"
        });
      }
      console.log(this.state.highlightForOtherHalfBorder);
    }
    //console.log(this.state.highlighted);
  };
  whenClicked = () => {
    if (!this.props.isMobile) {
      if (!this.state.clickedIsTure) {
        this.setState({

          paraToDisplay: "THIs is the asdasd asd asd asd asd asd asd asd",
          clickedIsTure: true
        });
      } else {
        this.setState({
          paraToDisplay: "",
          clickedIsTure: false
        });
      }
    } else {
      if (!this.state.clickedIsTure) {
        this.setState({
          highlightForImageBorder: "HighlightImage",
          highlightForOtherHalfBorder:
            "forAdminProfileTitle forAdminProfileTextArea HighlightOtherHalfOfAdmindProfile",
          paraToDisplay: "THIs is the asdasd asd asd asd asd asd asd asd",
          clickedIsTure: true
        });
      } else {
        this.setState({
          highlightForImageBorder: "",
          highlightForOtherHalfBorder:
            "forAdminProfileTitle forAdminProfileTextArea",
          paraToDisplay: "",
          clickedIsTure: false
        });
      }
    }
  };
  render() {
    return (
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
    );
  }
}

export default AdminProfile;
