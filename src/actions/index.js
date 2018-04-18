// define our actions

export const addTicket = (ticket) => {
  return {
    type: "ADD_TICKET",
    ticket: ticket
  }
}