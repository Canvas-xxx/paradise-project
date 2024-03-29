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
import { Actions } from 'react-native-router-flux';

export default class App extends Component {

  componentWillMount() {
    OneSignal.setLogLevel(7, 0)
    OneSignal.init("f4f4bcc5-b7bb-4472-ab09-985584d5f098")
    OneSignal.inFocusDisplaying(2)
  }

  componentDidMount() {
    OneSignal.configure()

    this.onReceived = this.onReceived.bind(this);
    this.onOpened = this.onOpened.bind(this);
    this.onIds = this.onIds.bind(this);

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification: any) {
    // console.log("Notification received: ", notification);

    this.setState({jsonDebugText : "RECEIVED: \n" + JSON.stringify(notification, null, 2)})
  }

  onOpened(openResult: any) {
    // console.log('Message: ', openResult.notification.payload.body);
    // console.log('Data: ', openResult.notification.payload.additionalData);
    // console.log('isActive: ', openResult.notification.isAppInFocus);
    // console.log('openResult: ', openResult);
    const additionalData: any = openResult.notification.payload.additionalData
    if (additionalData) {

      if(additionalData.hasOwnProperty('studentId')) {
        setTimeout( function() {
          Actions.trackingDetail({ studentId: additionalData['studentId'], schoolId: additionalData['schoolId'], techId: additionalData['techId'] })
        }, 1000)
        return
      }

      if(additionalData.hasOwnProperty('page')) {
        setTimeout( function() {
          Actions.announce()
        }, 1000)
      }
    }
  }

  onIds(device: any) {
    store.dispatch({ type: 'SET_SENDER_ID', payload: device.userId })
  }

  render() {
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }

}
