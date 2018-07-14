/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react'
import { Component } from 'react';
import { View } from 'react-native';
import LoginScreen from './app/src/screens/login/LoginScreen'
import RouterComponent from './app/src/router'

export default class App extends Component {
  render() {
    return (
      // <View>
      //   <LoginScreen selectedPage={true} />
      // </Viewz>
      <RouterComponent />
    );
  }
}
