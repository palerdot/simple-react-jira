// define the reducers that changes the state tree based on the dispatched actions

const initialState = {
  tickets: []
}

// reducer for tickets
function ticketsReducer(state = [], action) {
  switch (action.type) {
    // adds ticket
    case 'ADD_TICKET':
      console.log('porumai! adding ticket in reducer ===> ', action.ticket)
      // add id to ticket
      let ticket = Object.assign({}, {id: state.length}, action.ticket)
      return [
        ...state,
        ticket
      ]

    default:
      return []
  }
}

// OVERALL REDUCER (to be exported)
// we are explicitly not using combineReducers to have better visibility of what is going on
export default function ticketApp(state = {}, action)  {  
  return {
    tickets: ticketsReducer(state.tickets, action)
  }
}
