import React, { Component } from "react";
import Nav from './components/Nav'
import logo from './images/logo.png'

import {
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import './App.css'
import './custom.scss';
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="BigDiv">

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Container>
            <Row>
              <Col>
                <Image src={logo} rounded />
              </Col>
              <Col>
                <Nav />
              </Col>
              <Col />
            </Row>
          </Container>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Investing">
              <Investing />
            </Route>
            <Route path="/DankTesla">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div >
      <h2>Home</h2>
    </div>
  );
}
function Investing() {
  return (
    <div>
      <h2>Investing</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>DankTesla</h2>
    </div>
  );
}