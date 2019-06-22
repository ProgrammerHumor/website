import * as React from "react";
import "./WelcomeStyle.css";
import "./BottomHalfOfPageStyle.css";
import "../../Footer/FooterStyle.css";
import coding from '../../images/coding.svg'
import {
  Image,
  Header,
  Card
} from "semantic-ui-react";

class HomePage extends React.Component<{}, {}> {
  state = {};

  waitForElement () {
    let background = document.getElementById("pageBackground")!;
    if (background){
        //variable exists, do what you want
      background.style.backgroundImage = "url(/static/media/circuit-board.ed7d9d2d.svg)";
      background.style.backgroundColor = "#3f3c56";
    } else {
        setTimeout(this.waitForElement, 250);
    }
  }

  render() {
    this.waitForElement();
    return (
      <div>
        <Header className="Welcome" inverted size="huge">Welcome to ProgrammerHumor!</Header>
        <Header inverted>The funniest developer community out there.</Header>
        <Image centered src={coding}></Image>
        <Card.Group centered className="cardGroup">
          <Card href="https://reddit.com/r/ProgrammerHumor" className="card">
            <Card.Content>
              <Card.Header id="cardHeader" className="cardText">What's ProgrammerHumor?</Card.Header>
              <Card.Description id="cardDescription" className="cardText">We are a community of programmers looking to have some fun and achieving world domination by hacking with HTML.</Card.Description>
            </Card.Content>
          </Card>
          <Card href="Hackathon" className="card">
          <Card.Content>
            <Card.Header id="cardHeader" className="cardText">Current Events</Card.Header>
            <Card.Description id="cardDescription" className="cardText">Exciting news! We're hosting our very first community event, an Overengineering hackathon!</Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    );
  }
}

export default HomePage;
