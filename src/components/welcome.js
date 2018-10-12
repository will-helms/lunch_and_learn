import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";

export default class Welcome extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to the React.js Lunch and Learn</p>
          <div>Will Helms</div>
          <Link to="/home" style={{color: "white", paddingTop: 20}}>Get Started</Link>
        </header>
      </div>
    );
  }
}
