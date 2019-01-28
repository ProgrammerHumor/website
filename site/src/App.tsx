import React, { Component } from 'react';
import './App.css';
import NavBar from './navBar';
const leftItems = [
  { as: "a", content: "AboutUs", key: "AboutUs" },
  { as: "a", content: "Hackathon", key: "Hackathon" },
  { as: "a", content: "Blog", key: "Blog" },
  { as: "a", content: "Merch", key: "Merch" }
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar leftItems={leftItems}>
          </NavBar>
        </header>
      </div>
    );
  }
}

export default App;
