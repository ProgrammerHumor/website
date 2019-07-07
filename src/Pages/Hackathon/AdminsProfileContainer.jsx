import React, { Component } from "react";
import AdminProfile from "./AdminProfile";
// import img1 from "./logo.png";
// import img2 from "./BackgroundPattern.png";
import gator from "../../images/people/gator.jpg";
import delite from "../../images/people/delite.jpg"
import img3 from "../../images/AndySamberg.jpg";
import { Responsive } from "semantic-ui-react";

class AdminsProflies extends Component {
  state = {
    profileRow1: [
      {
        key: 0,
        title: "Streamer and Organizer",
        img: gator,
        name: "Gator",
        gitHubLink: "https://github.com/A1igator",
        redditLink: "https://www.reddit.com/user/xxaligatorxx",
      },
      {
        key: 1,
        title: "Judge and Organizer",
        img: img3,
        name: "Jman005",
        discordLink: "https://www.google.com/",
        gitHubLink: "https://www.google.com/",
        redditLink: "https://www.google.com/",
      },
      {
        key: 2,
        title: "Streamer and Judge",
        img: img3,
        name: "Steve",
        twitterLink: "https://twitter.com/countingsort",
        redditLink: "https://www.reddit.com/user/SteveCCL",
      },
      {
        key: 3,
        title: "Judge",
        img: delite,
        name: "Delite",
      },
      {
        key: 4,
        title: "Celebrity",
        img: img3,
        name: "Andy Samberg",
        discordLink: "https://www.google.com/",
        gitHubLink: "https://www.google.com/",
        redditLink: "https://www.google.com/",
      }
    ],
    profileRow2: [
      {
        key: 0,
        title: "Celebrity",
        img: img3,
        name: "Andy Samberg",
        discordLink: "https://www.google.com/",
        gitHubLink: "https://www.google.com/",
        redditLink: "https://www.google.com/",
      },
      {
        key: 1,
        title: "Celebrity",
        img: img3,
        name: "Andy Samberg",
        discordLink: "https://www.google.com/",
        gitHubLink: "https://www.google.com/",
        redditLink: "https://www.google.com/",
      },
      {
        key: 2,
        title: "Celebrity",
        img: img3,
        name: "Andy Samberg",
        discordLink: "https://www.google.com/",
        gitHubLink: "https://www.google.com/",
        redditLink: "https://www.google.com/",
      },
      {
        key: 3,
        title: "Celebrity",
        img: img3,
        name: "Andy Samberg",
        discordLink: "https://www.google.com/",
        gitHubLink: "https://www.google.com/",
        redditLink: "https://www.google.com/",
      },
      {
        key: 4,
        title: "Celebrity",
        img: img3,
        name: "Andy Samberg",
        discordLink: "https://www.google.com/",
        gitHubLink: "https://www.google.com/",
        redditLink: "https://www.google.com/",
      }
    ],
    numberOfDisplayedParaRow1: 0,
    numberOfDisplayedParaRow2: 0
  };
  displayParaRow1 = (bool) => {
    console.log("display1");
    if (bool) {
      this.setState({
        numberOfDisplayedParaRow1: this.state.numberOfDisplayedParaRow1 + 1
      });
      console.log(this.state.numberOfDisplayedParaRow1 + " row1");
    } else {
      this.setState({
        numberOfDisplayedParaRow1: this.state.numberOfDisplayedParaRow1 - 1
      });
      console.log(this.state.numberOfDisplayedParaRow1 + " row1");
    }
  };
  displayParaRow2 = (bool) => {
    console.log("display2");
    if (bool) {
      this.setState({
        numberOfDisplayedParaRow2: this.state.numberOfDisplayedParaRow2 + 1
      });
      console.log(this.state.numberOfDisplayedParaRow2 + " row2");
    } else {
      this.setState({
        numberOfDisplayedParaRow2: this.state.numberOfDisplayedParaRow2 - 1
      });
      console.log(this.state.numberOfDisplayedParaRow2 + " row2");
    }
  };
  checkRows = (Row1) => {
    if (Row1) {
      if (this.state.numberOfDisplayedParaRow1 == 4) {
        return false;
      } else {
        return true;
      }
    } else {
      if (this.state.numberOfDisplayedParaRow2 == 4) {
        return false;
      } else {
        return true;
      }
    }
  }
  render() {
    return (
      <div>
        <Responsive {...Responsive.onlyComputer}>
          <div className="AboutUsWholePage">
            {this.state.profileRow1.map(pro => (
              <div className="forAdminProfile">
                <AdminProfile
                  title={pro.title}
                  img={pro.img}
                  name={pro.name}
                  twitterLink={pro.twitterLink}
                  gitHubLink={pro.gitHubLink}
                  discordLink={pro.discordLink}
                  redditLink={pro.redditLink}
                  isMobile={false}
                  displayPara={this.displayParaRow1}
                  checkPara={this.checkRows}
                  row1={true}
                />
              </div>
            ))}
          </div>
          <div className="AboutUsWholePage">
            {this.state.profileRow2.map(pro => (
              <div className="forAdminProfile">
                <AdminProfile
                  title={pro.title}
                  img={pro.img}
                  name={pro.name}
                  gitHubLink={pro.gitHubLink}
                  twitterLink={pro.twitterLink}
                  discordLink={pro.discordLink}
                  redditLink={pro.redditLink}
                  isMobile={false}
                  displayPara={this.displayParaRow2}
                  checkPara={this.checkRows}
                  row1={false}
                />
              </div>
            ))}
          </div>
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
          {this.state.profileRow1.map(pro => (
            <div className="mobileAdminContainer">
              <AdminProfile
                title={pro.title}
                img={pro.img}
                name={pro.name}
                gitHubLink={pro.gitHubLink}
                discordLink={pro.discordLink}
                redditLink={pro.redditLink}
                isMobile={true}
              />
            </div>
          ))}
          {this.state.profileRow2.map(pro => (
            <div className="mobileAdminContainer">
              <AdminProfile
                title={pro.title}
                img={pro.img}
                name={pro.name}
                gitHubLink={pro.gitHubLink}
                discordLink={pro.discordLink}
                redditLink={pro.redditLink}
                isMobile={true}
              />
            </div>
          ))}
        </Responsive>
      </div>
    );
  }
}
export default AdminsProflies;