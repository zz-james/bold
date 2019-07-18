import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import {cellar} from './reducer-bottles'
import {CellarApp} from './cellar.jsx'
import {data} from './data.js';

const version = `{{version}}`;

const store = createStore(
  cellar,
  data
);

ReactDOM.render(
  <Provider store={store} >
    <CellarApp />
  </Provider>,
  document.getElementById('root')
);