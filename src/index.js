import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// include bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// special helper to pass the store as prop to all the components
import { Provider } from 'react-redux'

// create a redux store
import { createStore } from 'redux'
import ticketApp from './reducers'

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// create store
let store = createStore(ticketApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)

registerServiceWorker()
