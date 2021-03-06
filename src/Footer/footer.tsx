import * as React from "react";
import {
  Icon,
  Responsive,
  Button,
} from "semantic-ui-react";

class footerCom extends React.Component {
  render() {
    if (document.body.clientWidth >= 700) {
      return (
        <div className="footer">
          <div className="footerButton">
            <Button
              href="https://github.com/ProgrammerHumor"
              icon
              color="black"
              size="massive"
            >
              <Icon name="github" />
            </Button>
            <Button
              href="https://www.reddit.com/r/ProgrammerHumor"
              icon
              color="orange"
              size="massive"
            >
              <Icon name="reddit" />
            </Button>
            <Button
              href="https://discord.gg/ph"
              icon
              color="violet"
              size="massive"
            >
              <Icon name="discord" />
            </Button>
            <Button
              href="https://www.twitch.tv/programmerhumor"
              icon
              color="purple"
              size="massive"
            >
              <Icon name="twitch" />
          </Button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="mobileFooter">
          <Button
            href="https://github.com/ProgrammerHumor"
            icon
            color="black"
            size="large"
          >
            <Icon name="github" />
          </Button>
          <Button
            href="https://www.reddit.com/r/ProgrammerHumor"
            icon
            color="black"
            size="large"
          >
            <Icon name="reddit" />
          </Button>
          <Button
            href="https://discord.gg/ph"
            icon
            color="black"
            size="large"
          >
            <Icon name="discord" />
          </Button>
          <Button
            href="https://www.twitch.tv/programmerhumor"
            icon
            color="black"
            size="large"
          >
            <Icon name="twitch" />
          </Button>
        </div>
      );
    }
  }
}

export default footerCom;
