import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Welcome from "./welcomeCom";
import RedditLink from "./redditLink";
import CurrentEvent from "./currentEvent";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("navBar"));
ReactDOM.render(<Welcome />, document.getElementById("welcomeCom"));
ReactDOM.render(<RedditLink />, document.getElementById("redditLink"));
ReactDOM.render(<CurrentEvent />, document.getElementById("currentEvent"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
