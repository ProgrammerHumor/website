import React, { Component } from 'react';
import { withRouter, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './navBar';

class App extends Component<{ history: any }, { history: any }> {
  render() {
    const leftItems = [
      {
        onClick: () => {
          const { history }: { history: any } = this.props;
          history.replace('/mypage')
        }, as: "a", content: "AboutUs", key: "AboutUs"
      },
      { onClick: () => console.log('test3'), as: "a", content: "Hackathon", key: "Hackathon" },
      { onClick: () => console.log('test4'), as: "a", content: "Blog", key: "Blog" },
      { onClick: () => console.log('test5'), as: "a", content: "Merch", key: "Merch" }
    ];
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <NavBar leftItems={leftItems}>
            </NavBar>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
