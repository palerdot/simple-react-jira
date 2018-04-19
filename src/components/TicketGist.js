import React from 'react'

import { 
  Button, Badge
} from 'reactstrap'

const TicketGist = (props) => (
  <div className="ticket-info"
    onClick={() => props.navigateHandler(props.id)}
  >
    <h3>{props.title}</h3>
    <div>
      {props.tags.map((t) => <Badge key={t} color="info">{t}</Badge>)}
    </div>
  </div>
)

export default TicketGist