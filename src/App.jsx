import React from 'react'
import { Provider } from 'mobx-react'
import Screens from './screens'
import createStore from './store'
import './App.css'

const store = createStore()
store.fetch()

export default () => (
  <Provider store={store}>
    <div className="app">
      <h1>Powerpuff yourself</h1>

      <Screens />
    </div>
  </Provider>
)
