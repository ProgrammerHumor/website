import React, { Component } from "react";
import { Header, Grid, Button } from "semantic-ui-react";
import { HashLink as Link } from 'react-router-hash-link';

export default class FAQ extends Component {
  render = () => (
    <div id="FAQ">
      <div>
        <Header className="theme">Frequently Asked Questions:</Header>
        <Grid stackable columns="equal" divided>
          <Grid.Row>
            <Grid.Column>
              <Header size="medium" inverted>What is a hackathon?</Header>
              <div className="prizeDesc">It's an event where teams compete by coding!. You're given a theme to program something based on, and must complete your project within a given timeframe. After the due date, judges will vote for their favorite entry, and prizes will be distributed to the winners. </div>
            </Grid.Column>
            <Grid.Column>
              <Header size="medium" inverted>How can one register?</Header>
              <div className="prizeDesc"><Link to="/register">Click here</Link></div>
            </Grid.Column>
            <Grid.Column>
              <Header size="medium" inverted>How can one submit their entry?</Header>
              <div className="prizeDesc">Once you've completed your entry, upload it to either GitHub or GitLab and fill out our form (link TBA). See the "Submissions" page for more details.</div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header size="medium" inverted>How will projects be judged?</Header>
              <div className="prizeDesc">Shortly after the due date, our judges will assess your entry based on the judging criteria specified above (code quality is not included). </div>
            </Grid.Column>
            <Grid.Column>
              <Header size="medium" inverted>How can I form teams?</Header>
              <div className="prizeDesc">You can invite your friends, or, if you have never heard of those magical creatures, look for people on the subreddit or our Discord server. You can even go solo! Anything works as long as team.length &lt;= 4</div>
            </Grid.Column>
            <Grid.Column>
              <Header size="medium" inverted>Help! I need additional info.</Header>
              <div className="prizeDesc">You can ask either on the subreddit with the Hackathon flair, or on the <Link to="/discord">Discord server</Link>. We recommend joining Discord since you would be more likely to get assistance quickly there.</div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}
