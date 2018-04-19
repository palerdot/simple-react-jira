// creates a new ticket
import React from 'react'

// redux related
import { connect } from 'react-redux'

// import actions
import { addTicket } from '../actions'

// noty alert
import Noty from 'noty'

// import validators
import {
  titleValidator, 
  tagsValidator 
} from '../utils/'

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
  return {
    createTicket: (ticket) => {
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
    }
  }

  // helper function to render tags
  _renderTags() {
    return (
      this.state.tags.map(
        (t) => 
          <Badge key={t} color="info" className="tag-badge">
            {t}{' '}
            <span className="oi" data-glyph="circle-x" title="remove tag" aria-hidden="true"
              onClick={() => {
                let tags = this.state.tags.filter((tag) => tag !== t)
                // set the new tags
                this.setState({
                  tags
                })
              }}
            ></span>
          </Badge>
      )
    )
  }

  // main function to create ticket
  _createTicket = (history) => {

    // validate title
    let is_title_valid = titleValidator(this.state.title)

    if (!is_title_valid) {
      new Noty({
        text: 'Please enter a valid title within 80 characters',
        type: 'error',
        theme: 'sunset',
        timeout: 1000
      }).show()
      // do not proceed
      return
    }

    // validate tags
    let is_tag_valid = tagsValidator(this.state.tags)

    if (!is_tag_valid) {
      new Noty({
        text: 'Please enter a valid tag within 20 characters',
        type: 'error',
        theme: 'sunset',
        timeout: 1000
      }).show()
      // do not proceed
      return
    }

    this.props.createTicket(this.state, history) 

    new Noty({
      text: 'Ticket created successfully',
      type: 'success',
      theme: 'sunset',
      timeout: 1000
    }).show()
  }

  render() {
    return (
      <Container>
        <Row>
          <Col s="12">
            <Form>
              <FormGroup>
                <Label for="ticketTitle">Title</Label>
                <Input 
                  type="text" name="title" id="ticketTitle" placeholder="Please enter title"
                  defaultValue={this.state.title}
                  onChange={(e) => this.setState({
                    title: e.target.value.trim()
                  })} 
                />
              </FormGroup>
              <FormGroup>
                <Label for="ticketDescription">Description</Label>
                <Input 
                  type="textarea" name="description" id="ticketDescription" 
                  defaultValue={this.state.description}
                  onChange={(e) => this.setState({
                    description: e.target.value.trim()
                  })} 
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


