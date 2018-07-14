import React from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'
import LoginScreen from './screens/login/LoginScreen'
import ForgotScreen from './screens/login/ForgotScreen'

const RouterComponent = () => {
    return (
        <Router>
            <Stack key='root'>
                <Scene key='login' component={LoginScreen} hideNavBar={true} />
                <Scene key='forgot' component={ForgotScreen} hideNavBar={true} />
            </Stack>
        </Router>
    )
}

export default RouterComponent