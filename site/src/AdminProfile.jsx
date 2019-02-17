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
    classNameForImg: "",
    classNameForText: "forAdminProfileTitle forAdminProfileTextArea"
  };

  highlightBox = () => {
    this.setState({
      classNameForImg: "forHighlightingPerson",
      classNameForText:
        "forAdminProfileTitle forAdminProfileTextArea forHighlightingPerson"
    });
    console.log(this.state.highlighted);
  };
  unHighlightBox = () => {
    this.setState({
      classNameForImg: "",
      classNameForText: "forAdminProfileTitle forAdminProfileTextArea"
    });
    console.log(this.state.highlighted);
  };
  render() {
    return (
      <div className="paddingForDiv">
        <div
          onMouseLeave={this.unHighlightBox}
          onMouseOver={this.highlightBox}
          className="forAdminProfileImg"
        >
          <Image className={this.state.classNameForImg} src={this.props.img} />
        </div>
        <div
          onMouseLeave={this.unHighlightBox}
          onMouseOver={this.highlightBox}
          className={this.state.classNameForText}
        >
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
