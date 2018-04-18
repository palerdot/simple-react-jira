import React, { Component } from 'react'

import './App.css'

import { 
  BrowserRouter as Router, 
  Route, 
  Link,
  withRouter, 
} from "react-router-dom"

import {
  Container, Row, Col,
  Button
} from 'reactstrap'

// import our components
import Tickets from './components/Tickets'
import NewTicket from './components/NewTicket'

const App = () => (
  <Router>
    <Container>
      <Row className="header">
        <Col s="8">
          Simple React JIRA
        </Col>
        <Col s="4">
          <Link to="/">
            <Button color="secondary">Home</Button>{' '}
          </Link>
          <Link to="/new">
            <Button color="success">New Ticket</Button>{' '}
          </Link>
        </Col>
      </Row>

      <hr/>

      <Route exact path="/" component={Tickets}/>
      <Route path="/new" component={withRouter(NewTicket)}/>

    </Container>
  </Router>
)

export default App
