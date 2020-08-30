import React, { Component } from "react";
import Accordion from './components/Accordion'
import Nav from './components/Nav'
import logo from './images/logo.png'
import spanky from './images/spanky.png'

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

                {/* empty col for spacing */}
              </Col>
              <Col>

              </Col>
            </Row>
          </Container>

          <Switch>
            <Route exact path="/Sobran-LLC/">
              <Home />
            </Route>
            <Route path="/Sobran-LLC/Investing/">
              <Investing />
            </Route>
            {/* <Route path="Sobran-LLC/DankTesla">
              <Dashboard />
            </Route> */}
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
      <h2 style={{color: "white"}}>Did someone say JEWISH CEMETARY?!?</h2>
      <Image src={ spanky } rounded style={{border: "5px solid #555"}} />
    </div>
  );
}
function Investing() {
  return (
    <div>
      <Accordion />
    </div>
  );
}