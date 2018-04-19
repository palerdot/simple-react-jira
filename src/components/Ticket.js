import React from 'react'

import _ from 'lodash'

import { 
  Badge
} from 'reactstrap'

// redux related
import { connect } from 'react-redux'

// define our mapStateToProps, mapDispatchToProps
const mapStateToProps = (state, ownProps) => {
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
  <div className="">
    <h3>{props.title}</h3>
    <div>
      {props.description}
    </div>
    <div>
      {props.tags.map((t) => <Badge className="tag-badge" key={t} color="info">{t}</Badge>)}
    </div>
  </div>
)

export default connect(
  mapStateToProps
)(Ticket)