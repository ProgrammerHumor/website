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
  state = {
    highlighted: false,
    classNameForDiv: "paddingForDiv",
    paraToDisplay: ""
  };

  highlightBox = () => {
    this.setState({
      classNameForDiv: "forHighlightingPerson"
    });
    //console.log(this.state.highlighted);
  };
  unHighlightBox = () => {
    this.setState({
      classNameForDiv: "paddingForDiv",
      paraToDisplay: ""
    });
    //console.log(this.state.highlighted);
  };
  whenClicked = () => {
    this.setState({
      paraToDisplay: "THIs is the asdasd asd asd asd asd asd asd asd"
    });
  };
  render() {
    return (
      <div
        className={this.state.classNameForDiv}
        onClick={this.whenClicked}
        onMouseLeave={this.unHighlightBox}
        onMouseOver={this.highlightBox}
      >
        <div>
          <Image className="forHighlightingPersonImage" src={this.props.img} />
        </div>
        <div className="forAdminProfileTitle forAdminProfileTextArea">
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
