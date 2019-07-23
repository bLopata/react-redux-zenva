import React, { Component } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import "./App.css";
import glam, { Div } from "glamorous";
import "antd/dist/antd.css";
import { Layout } from "antd";

const Posts = () => <p>Posts</p>;
const Submit = () => <p>Submit</p>;

const StyledLink = glam(Link)(
  {
    color: "White"
  },
  ({ color }) => ({ color })
);

const HeaderLink = ({ to, children }) => (
  <Div css={{ padding: "0 10px" }}>
    <StyledLink to={to}>{children}</StyledLink>
  </Div>
);

const Header = glam(Layout.Header)({ display: "flex" });

class App extends Component {
  render() {
    return (
      <Layout>
        <Header>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/submit">Submit</HeaderLink>
        </Header>
        <Layout.Content>
          <Switch>
            <Redirect exact path="/" to="/posts" />
            <Route path="/posts" component={Posts} />
            <Route path="/submit" component={Submit} />
          </Switch>
        </Layout.Content>
      </Layout>
    );
  }
}

export default App;
