// main tickets component
import React from 'react'

import _ from 'lodash'

// redux related
import { connect } from 'react-redux'

import {
  Alert, 
  Container, Row, Col,
  Input, InputGroup, InputGroupAddon,
  Button
} from 'reactstrap'

// ticketgist component
import TicketGist from './TicketGist'

// define our mapStateToProps, mapDispatchToProps
const mapStateToProps = (state) => {
  return {
    tickets: state.tickets
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

class Tickets extends React.Component {
	
  constructor(props) {
    super(props)
    // set the state
    this.state = {
      filtered_tickets: props.tickets
    }
  }

  // helper function to navigate to ticket
  _navigateToTicket = (id) => {
    this.props.history.push("/ticket/" + id)
  }

  // helper function to render tickets
  _renderTickets() {

    // if not tickets just render an alert
    if (_.isEmpty(this.state.filtered_tickets)) {
      return (
        <Alert color="warning">
          No Tickets found ...
        </Alert>
      )
    }

    return this.state.filtered_tickets.map((t) => (
      <TicketGist
        key={t.id} 
        {...t}
        navigateHandler={this._navigateToTicket}
      />
    ))
  }

  // search by tag
  _searchByTag(e) {
    let isEnter = e.key === 'Enter'
    if (isEnter) {
      let search_tag = e.target.value.trim()
      // we need to search by this tags
      let filtered = _.filter(this.props.tickets, (ticket) => {
        // we need to go through our tags and search a likely match
        let status = _.map(ticket.tags, (tag) => _.startsWith(tag, search_tag))
        return !_.isEmpty(_.compact(status)) 
      })
      this.setState({
        filtered_tickets: filtered
      })
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col s="12">
            <InputGroup style={{margin: '11px 0'}}>
              <Input 
                type="text" name="tags" id="tag-search" placeholder="Enter tag to search and press enter"
                defaultValue={''}
                onKeyPress={(e) => this._searchByTag(e)} 
              />
              <InputGroupAddon addonType="prepend">
                <Button outline
                  onClick={() => {
                    document.getElementById('tag-search').value = ''
                    this.setState({
                      filtered_tickets: this.props.tickets
                    })
                  }}
                >Clear</Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col s="12">
            {this._renderTickets()}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tickets)

// export default Tickets

