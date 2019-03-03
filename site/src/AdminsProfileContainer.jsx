import React, { Component } from "react";
import AdminProfile from "./AdminProfile";
import img1 from "./logo.png";
import img2 from "./BackgroundPattern.png";
import img3 from "./AndySamberg.jpg";
import { Responsive } from "semantic-ui-react";

class AdminsProflies extends Component {
  state = {
    profileRow1: [
      {
        key: 0,
        title: "Celebrity",
        img: img3,
        name: "Andy Samberg",
        discordLink: "https://www.google.com/",
        gitHubLink: "https://www.google.com/",
        redditLink: "https://www.google.com/",
        paraAboutSelf:
          "I am a famous movie start who has nothing to do with website. I also enjoy other stuff, but right now I just want to fill space."
      },
      {
        key: 1,
        title: "Celebrity",
        img: img3,
        name: "Andy Samberg",
        discordLink: "https://www.google.com/",
        gitHubLink: "https://www.google.com/",
        redditLink: "https://www.google.com/",
        paraAboutSelf:
          "I am a famous movie start who has nothing to do with website. I also enjoy other stuff, but right now I just want to fill space."
      },
      {
        key: 2,
        title: "Celebrity",
        img: img3,
        name: "Andy Samberg",
        discordLink: "https://www.google.com/",
        gitHubLink: "https://www.google.com/",
        redditLink: "https://www.google.com/",
        paraAboutSelf:
          "I am a famous movie start who has nothing to do with website. I also enjoy other stuff, but right now I just want to fill space."
      },
      {
        key: 3,
        title: "Celebrity",
        img: img3,
        name: "Andy Samberg",
        discordLink: "https://www.google.com/",
        gitHubLink: "https://www.google.com/",
        redditLink: "https://www.google.com/",
        paraAboutSelf:
          "I am a famous movie start who has nothing to do with website. I also enjoy other stuff, but right now I just want to fill space."
      },
      {
        key: 4,
        title: "Celebrity",
        img: img3,
        name: "Andy Samberg",
        discordLink: "https://www.google.com/",
        gitHubLink: "https://www.google.com/",
        redditLink: "https://www.google.com/",
        paraAboutSelf:
          "I am a famous movie start who has nothing to do with website. I also enjoy other stuff, but right now I just want to fill space."
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
        paraAboutSelf:
          "I am a famous movie start who has nothing to do with website. I also enjoy other stuff, but right now I just want to fill space."
      },
      {
        key: 1,
        title: "Celebrity",
        img: img3,
        name: "Andy Samberg",
        discordLink: "https://www.google.com/",
        gitHubLink: "https://www.google.com/",
        redditLink: "https://www.google.com/",
        paraAboutSelf:
          "I am a famous movie start who has nothing to do with website. I also enjoy other stuff, but right now I just want to fill space."
      },
      {
        key: 2,
        title: "Celebrity",
        img: img3,
        name: "Andy Samberg",
        discordLink: "https://www.google.com/",
        gitHubLink: "https://www.google.com/",
        redditLink: "https://www.google.com/",
        paraAboutSelf:
          "I am a famous movie start who has nothing to do with website. I also enjoy other stuff, but right now I just want to fill space."
      },
      {
        key: 3,
        title: "Celebrity",
        img: img3,
        name: "Andy Samberg",
        discordLink: "https://www.google.com/",
        gitHubLink: "https://www.google.com/",
        redditLink: "https://www.google.com/",
        paraAboutSelf:
          "I am a famous movie start who has nothing to do with website. I also enjoy other stuff, but right now I just want to fill space."
      },
      {
        key: 4,
        title: "Celebrity",
        img: img3,
        name: "Andy Samberg",
        discordLink: "https://www.google.com/",
        gitHubLink: "https://www.google.com/",
        redditLink: "https://www.google.com/",
        paraAboutSelf:
          "I am a famous movie start who has nothing to do with website. I also enjoy other stuff, but right now I just want to fill space."
      }
    ]
  };
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
                  gitHubLink={pro.gitHubLink}
                  discordLink={pro.discordLink}
                  redditLink={pro.redditLink}
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
                  discordLink={pro.discordLink}
                  redditLink={pro.redditLink}
                  isMobile={false}
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
