import React, { Component } from "react";
import AdminProfile from "./AdminProfile";
import img1 from "./logo.png";
import img2 from "./BackgroundPattern.png";
import img3 from "./AndySamberg.jpg";

class AdminsProflies extends Component {
  state = {
    profileRow1: [
      {
        title: "Andy Samberg",
        img: img3,
        text:
          "Hi I am a famous movie star. I have nothing to do with this website, but I am hilarious"
      },
      { title: "Henry Morris", img: img2, text: "hi" },
      { title: "First Last", img: img1, text: "hi" },
      { title: "title4", img: img1, text: "hi" },
      { title: "title5", img: img1, text: "hi" }
    ]
  };
  render() {
    return (
      <div className="AboutUsWholePage">
        {this.state.profileRow1.map(pro => (
          <div className="forAdminProfile">
            <AdminProfile title={pro.title} img={pro.img} text={pro.text} />
          </div>
        ))}
      </div>
    );
  }
}
export default AdminsProflies;
