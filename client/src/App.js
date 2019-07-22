import React, { Component } from "react";
import logo from "./logo.svg";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import "./App.css";
import glam, { Div } from "glamorous";

const Posts = () => <p>Posts</p>;

const AppHeader = glam.header({
  backgroundColor: "#282c34",
  minHeight: 100,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "white"
});
class App extends Component {
  render() {
    return (
      <Div css={{ textAlign: "center" }}>
        <AppHeader className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
        </AppHeader>
        <p>
          <Switch>
            <Redirect exact path="/" to="/posts" />
            <Route path="/posts" component={Posts} />
          </Switch>
        </p>
      </Div>
    );
  }
}

export default App;
