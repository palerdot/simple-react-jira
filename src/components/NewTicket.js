// creates a new ticket
import React from 'react'

import _ from 'lodash'

// redux related
import { connect } from 'react-redux'

// import actions
import { addTicket } from '../actions'

import { 
  Container, Row, Col,
  Button, Badge,
  Form, FormGroup, Label, Input
} from 'reactstrap'

// define our mapStateToProps, mapDispatchToProps
const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('mapDispatchToProps ==> ', arguments)
  return {
    createTicket: (ticket) => {
      console.log('porumai! ticket submitted ', ticket, ownProps)
      dispatch(addTicket(ticket))
      // after creating ticket
      // navigate back to main ticket
      ownProps.history.push("/")
    }
  }
}

class NewTicket extends React.Component {
  constructor(props) {
    super(props)
    console.log('porumai! new ticket props ', props)
    // set state
    this.state = {
      title: "",
      description: "",
      tags: []
    }
  }

  // handles tag input
  // on enter creates a tag with the value of input box
  _addTag(e) {
    let isEnter = e.key === 'Enter'
    if (isEnter) {
      let tag = e.target.value.trim()
      let tags = this.state.tags
      tags.push(tag)
      // add the tag
      this.setState({
        tags: tags
      })
      // clear the input
      e.target.value = ""
      console.log('porumai! adding tag ', tag)
    }
  }

  // helper function to render tags
  _renderTags() {
    return (
      this.state.tags.map(
        (t) => <Badge key={t} color="info">{t}</Badge>
      )
    )
  }

  // main function to create ticket
  _createTicket = (history) => this.props.createTicket(this.state, history)

  render() {
    return (
      <Container>
        <Row>
          porumai! will create new ticket  
        </Row>
        <Row>
          <Col s="12">
            <Form>
              <FormGroup>
                <Label for="ticketTitle">Title</Label>
                <Input 
                  type="text" name="title" id="ticketTitle" placeholder="Please enter title"
                  defaultValue={this.state.title}
                  onChange={(e) => this.state.title = e.target.value.trim()} 
                />
              </FormGroup>
              <FormGroup>
                <Label for="ticketDescription">Description</Label>
                <Input 
                  type="textarea" name="description" id="ticketDescription" 
                  defaultValue={this.state.description}
                  onChange={(e) => this.state.description = e.target.value.trim()} 
                />
              </FormGroup>
              <FormGroup>
                <Label for="ticketTags">Tags</Label>
                <p>
                  {this._renderTags()}
                </p>
                <Input 
                  type="text" name="tags" id="ticketTags" placeholder="Please enter a tag and hit Enter"
                  onKeyPress={(e) => this._addTag(e)} 
                />
              </FormGroup>
              
              <Button color="success" onClick={this._createTicket}>Create Ticket</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTicket)

// export default NewTicket


