import React, { Component } from "react";
import { Header, Grid, Button, Dropdown, DropdownMenu, Message } from "semantic-ui-react";
import { HashLink as Link } from 'react-router-hash-link';

export default class FAQ extends Component {
  render = () => (
    <div id="FAQ">
        <Header className="theme">Frequently Asked Questions</Header>
        <Dropdown className="dropDown" fluid multiple text="What is a hackathon?">
          <DropdownMenu>
            <Message className="dropText">It's an event where teams compete by coding! You're given a theme to program something based on, and must complete your project within a given timeframe. After the due date, judges will vote for their favorite entry, and prizes will be distributed to the winners.</Message>            
          </DropdownMenu>
        </Dropdown>
        <Dropdown className="dropDown" fluid multiple text="How can one submit their entry?">
          <DropdownMenu>
            <Message className="dropText">Once you've completed your entry, upload it to either GitHub or GitLab and fill out our form (link TBA). See the "Submissions" page for more details.</Message>            
          </DropdownMenu>
        </Dropdown>
        <Dropdown className="dropDown" fluid multiple text="How will projects be judged?">
          <DropdownMenu>
            <Message className="dropText">Shortly after the due date, our judges will assess your entry based on the judging criteria specified above (code quality is not included).</Message>            
          </DropdownMenu>
        </Dropdown>
        <Dropdown className="dropDown" fluid multiple text="How can I form teams?">
          <DropdownMenu>
            <Message className="dropText">You can invite your friends, or, if you have never heard of those magical creatures, look for people on the subreddit or our Discord server. You can even go solo! Anything works as long as team.length &lt;= 4</Message>            
          </DropdownMenu>
        </Dropdown>
        <Dropdown className="dropDown" fluid multiple text="Help! I need additional info.">
          <DropdownMenu>
            <Message className="dropText"> You can ask either on the subreddit with the Hackathon flair, or on the <a href="https://discord.gg/7cbeUvC">Discord Server</a>. We recommend joining Discord since you would be more likely to get assistance quickly there.</Message>            
          </DropdownMenu>
        </Dropdown>
    </div>
  );
}
