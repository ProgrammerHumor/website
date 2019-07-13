import React, { Component } from "react";
import { Header, Grid, Button, Dropdown, DropdownMenu, Message } from "semantic-ui-react";
import { HashLink as Link } from 'react-router-hash-link';

export default class Rules extends Component {
  render = () => (
    <div id="Rules">
      <div>
        <Header className="theme">Rules</Header>
        <Dropdown className="dropDown" fluid multiple text="Be civilized and respectful">
          <DropdownMenu>
            <Message className="dropText">Please be nice to each other. This is mainly for fun and there is no reason to bring any hate into the Hackathon. As always, remember the human.</Message>            
            <Button style={{
                marginTop: "2px",
                }} as="a" href="code-of-conduct.html">Code Of Conduct</Button>
          </DropdownMenu>
        </Dropdown>
        <Dropdown className="dropDown" fluid multiple text="Maximum team of 4">
          <DropdownMenu>
            <Message className="dropText">To keep things somewhat fair, we unfortunately have to have a cap on team size. Prizes will be distributed evenly between winning teams.</Message>            
          </DropdownMenu>
        </Dropdown>
        <Dropdown className="dropDown" fluid multiple text="Program Rules">
          <DropdownMenu>
            <Message className="dropText">Your program must be 100% legal and only use libraries which the creator permits you to use.</Message>
            <Message className="dropText">Your may not start programming before the start time.</Message>
            <Message className="dropText">The program source code must be available.</Message>           
            <Message className="dropText"> Any entry found to contain malicious code, including but not limited to: Cryptocurrency miners (unless this is directly related to your submission), viruses/file infectors, adware or spyware will be met with harsh punishment.</Message>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}
