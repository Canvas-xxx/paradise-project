/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react'
import { Component } from 'react';
import { View } from 'react-native';
import LoginScreen from './app/src/screens/login/LoginScreen'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <LoginScreen selectedPage={true} />
      </View>
    );
  }
}
