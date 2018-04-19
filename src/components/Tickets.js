// main tickets component
import React from 'react'

import _ from 'lodash'

// redux related
import { connect } from 'react-redux'

import { 
  Container, Row, Col
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
  }

  // helper function to navigate to ticket
  _navigateToTicket = (id) => {
    console.log('porumai! navigating to id ', id)
    this.props.history.push("/ticket/" + id)
  }

  // helper function to render tickets
  _renderTickets() {
    return this.props.tickets.map((t) => (
      <TicketGist
        key={t.id} 
        {...t}
        navigateHandler={this._navigateToTicket}
      />
    ))
  }

  render() {
    return (
      <Container>
        <Row>
          <Col s="12">porumai! will show the tickets</Col>
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

