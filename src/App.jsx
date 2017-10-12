import React from 'react'
import { Provider } from 'mobx-react'
import Screens from './screens'
import Background from './components/background'
import createStore from './store'
import './App.css'

export default () => (
  <Provider store={createStore()}>
    <div className="app">
      <Background />
      <div className="container">
        <h1>Pimp my Powerpuff</h1>
        <Screens />
      </div>
    </div>
  </Provider>
)
