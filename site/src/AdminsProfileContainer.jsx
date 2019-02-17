import React, { Component } from "react";
import AdminProfile from "./AdminProfile";
import img1 from "./logo.png";
import img2 from "./BackgroundPattern.png";
import img3 from "./AndySamberg.jpg";

class AdminsProflies extends Component {
  state = {
    profileRow1: [
      {
        title: "Celebrity",
        img: img3,
        name: "Andy Samberg",
        discordLink: "https://www.google.com/",
        gitHubLink: "https://www.google.com/",
        redditLink: "https://www.google.com/"
      },
      {
        title: "Celebrity",
        img: img3,
        name: "Andy Samberg",
        discordLink: "https://www.google.com/",
        gitHubLink: "https://www.google.com/",
        redditLink: "https://www.google.com/"
      },
      {
        title: "Celebrity",
        img: img3,
        name: "Andy Samberg",
        discordLink: "https://www.google.com/",
        gitHubLink: "https://www.google.com/",
        redditLink: "https://www.google.com/"
      },
      {
        title: "Celebrity",
        img: img3,
        name: "Andy Samberg",
        discordLink: "https://www.google.com/",
        gitHubLink: "https://www.google.com/",
        redditLink: "https://www.google.com/"
      },
      {
        title: "Celebrity",
        img: img3,
        name: "Andy Samberg",
        discordLink: "https://www.google.com/",
        gitHubLink: "https://www.google.com/",
        redditLink: "https://www.google.com/"
      }
    ]
  };
  render() {
    return (
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
    );
  }
}
export default AdminsProflies;
