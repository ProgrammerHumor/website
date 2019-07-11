import React, { Component } from "react";
import { Header, Grid, Button, Dropdown, DropdownMenu, Message } from "semantic-ui-react";
import { HashLink as Link } from 'react-router-hash-link';

export default class Rules extends Component {
  render = () => (
    <div id="Rules">
      <div>
        <Header className="theme">Rules</Header>
        {/* <Grid stackable columns="equal" divided>
          <Grid.Row>
            <Grid.Column>
              <Header size="medium" inverted>Be civilized and respectful</Header>
              <div className="prizeDesc">Please be nice to each other. This is mainly for fun and there is no reason to bring any hate into the Hackathon. As always, remember the human.</div>
              <Button style={{
                marginTop: "2vh",
                }} as="a" href="code-of-conduct.html">Code Of Conduct</Button>
            </Grid.Column>
            <Grid.Column>
              <Header size="medium" inverted>Maximum team of 4</Header>
              <div className="prizeDesc">To keep things somewhat fair, we unfortunately have to have a cap on team size. Prizes will be distributed evenly between winning teams.</div>
            </Grid.Column>
            <Grid.Column>
              <Header size="medium" inverted>Code must be legal and harmless</Header>
              <div className="prizeDesc">Your code must be 100% legal and only use libraries which the creator permits you to use. Any entry found to contain malicious code, including but not limited to: Cryptocurrency miners (unless this is directly related to your submission), viruses/file infectors, adware or spyware will be immediately disqualified, and said entrants may be banned from future ProgrammerHumor hackathons.</div>
            </Grid.Column>
          </Grid.Row>
        </Grid> */}
        <Dropdown className="dropDown" fluid multiple text="Be civilized and respectful">
          <DropdownMenu>
            <Message>Please be nice to each other. This is mainly for fun and there is no reason to bring any hate into the Hackathon. As always, remember the human.</Message>            
            <Button style={{
                marginTop: "2px",
                }} as="a" href="code-of-conduct.html">Code Of Conduct</Button>
          </DropdownMenu>
        </Dropdown>
        <Dropdown className="dropDown" fluid multiple text="Maximum team of 4">
          <DropdownMenu>
            <Message>To keep things somewhat fair, we unfortunately have to have a cap on team size. Prizes will be distributed evenly between winning teams.</Message>            
          </DropdownMenu>
        </Dropdown>
        <Dropdown className="dropDown" fluid multiple text="Program Rules">
          <DropdownMenu>
            <Message>Your program must be 100% legal and only use libraries which the creator permits you to use.</Message>
            <Message>Your may not start programming before the start time.</Message>
            <Message>The program source code must be available.</Message>           
            <Message> Any entry found to contain malicious code, including but not limited to: Cryptocurrency miners (unless this is directly related to your submission), viruses/file infectors, adware or spyware will be met with harsh punishment.</Message>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}
