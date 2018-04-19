import React from 'react'
import ReactDOM from 'react-dom'

import TicketGist from './components/TicketGist'

// import validators
import {
  tagsValidator,
  titleValidator
} from './utils/'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TicketGist tags={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
})

test('title should be less than 80 characters', () => {
  let title = 'hello'
  expect( titleValidator(title) ).toEqual(true)
})

test('title should not be greater than 80 characters', () => {
  let title = 'hello how are you? this is a long title ... hello how are you? this is a long title ... hello how are you? this is a long title ... '
  expect( titleValidator(title) ).toEqual(false)
})

test('tags should be less than 20 characters', () => {
  let tags = ['hello']
  expect( tagsValidator(tags) ).toEqual(true)
})

test('tags should not be greater than 20 characters', () => {
  let tags = ['hello how are you? this is a long tag']
  expect( tagsValidator(tags) ).toEqual(false)
})


