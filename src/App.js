import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "./components/welcome";
import Home from "./components/home";
import { LunchAndLearn } from "./components/lunch-and-learn";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/home" component={Home} />
        <Route path="/state_test" component={LunchAndLearn}/>
      </Switch>
    );
  }
}

export default App;
