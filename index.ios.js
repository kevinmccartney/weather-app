/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './app/reducers'
import App from './app'

const store = createStore(rootReducer)

class WeatherApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('WeatherApp', () => WeatherApp)
