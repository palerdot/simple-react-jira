import React from 'react'

import _ from 'lodash'

import { 
  Button, Badge
} from 'reactstrap'

// redux related
import { connect } from 'react-redux'

// define our mapStateToProps, mapDispatchToProps
const mapStateToProps = (state, ownProps) => {
  console.log('porumai! msp ', ownProps)
  return _getTicketInfo(state.tickets, ownProps.match.params.id)
}

// helper function to get ticketInfo
function _getTicketInfo(tickets, id) {
  let ticket = _.find(tickets, (t) => t.id == id)
  return ticket || {
    id: null,
    title: '',
    description: '',
    tags: []
  }
} 

const Ticket = (props) => (
  <div className="ticket-info">
    <h3>{props.title}</h3>
    <div>
      {props.description}
    </div>
    <div>
      {props.tags.map((t) => <Badge key={t} color="info">{t}</Badge>)}
    </div>
  </div>
)

export default connect(
  mapStateToProps
)(Ticket)

/*class Ticket extends React.Component {
  constructor(props) {
    super(props)
    console.log('porumai! ticket props ', props.match.params.id)
  }

  render() {
    return (
      <div className="ticket-info">
        <h3></h3>
        <div>
          {''}
        </div>
      </div>
    )
  }
}*/

// export default Ticket