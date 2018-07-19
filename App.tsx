/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react'
import { Component } from 'react';
import RouterComponent from './src/app/router'
import OneSignal from 'react-native-onesignal'
import { Provider } from 'react-redux'
import store from './src/app/store'

export default class App extends Component {
  componentWillMount() {
    OneSignal.init('f4f4bcc5-b7bb-4472-ab09-985584d5f098')

    OneSignal.addEventListener('received', this.onReceived)
    OneSignal.addEventListener('opened', this.onOpened)
    OneSignal.addEventListener('ids', this.onIds)
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived)
    OneSignal.removeEventListener('opened', this.onOpened)
    OneSignal.removeEventListener('ids', this.onIds)
  }

  onReceived(notification: any) {
    console.log("Notification received: ", notification)
  }

  onOpened(openResult: any) {
    console.log('Message: ', openResult.notification.payload.body)
    console.log('Data: ', openResult.notification.payload.additionalData)
    console.log('isActive: ', openResult.notification.isAppInFocus)
    console.log('openResult: ', openResult)
  }

  onIds(device: any) {
    console.log('Device info: ', device)
  }

  render() {
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}
