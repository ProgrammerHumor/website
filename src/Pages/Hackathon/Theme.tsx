import React, { Component } from "react";
import { Button, Header, Image } from "semantic-ui-react";
import ReactMarkdown from 'react-markdown';
import overeng from "../../images/Overeng.png";

export default class Theme extends Component {
  render = () => (
    <div id="Theme">
      <div>
        <Header className="theme">Theme</Header>
        <Image centered size="massive" src={overeng}/>
        <Header className="themeDesc">
          Come up with programs that make trivial actions complicated!
        </Header>
        <ReactMarkdown className="themeDesc2" source={"## Judging Criteria\nYou will be judged on these three aspects:\n### UI Overengineering\nEx: you make the UI have way more features than it needs. Keep in mind while some bad UI posts fit this, not all do.\n### Code Overengineering\nEx: you future proof the crap out of your program, by writing code that accomedates every scenario.\n### DevOps Overengineering\nEx: you have the best serverless design of having a million kubernetes containers.\n\nKeep in mind you do not have to have your project fit all the criterias above. You can do all or focus on one. We won't judge any other aspect of your project."} />
      </div>
    </div>
  );
}
