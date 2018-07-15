import React from 'react'
import { Router, Scene, Stack, Actions } from 'react-native-router-flux'
import { Icon } from 'react-native-elements'
import LoginScreen from './screens/login/LoginScreen'
import ForgotScreen from './screens/login/ForgotScreen'
import HomeScreen from './screens/homepage/HomeScreen'
import TrackingScreen from './screens/homepage/TrackingScreen'
import SettingScreen from './screens/setting/SettingScreen'

const RouterComponent = () => {
    return (
        <Router>
            <Stack key='root'>
                <Scene key='auth' hideNavBar={true}>
                    <Scene key='login' component={LoginScreen} hideNavBar={true} />
                    <Scene key='forgot' component={ForgotScreen} hideNavBar={true} />
                </Scene>
                <Scene key='main' tabs={true} showLabel={false} tabBarStyle={{ backgroundColor: '#f5f5f5', borderTopWidth: 1, borderTopColor: '#33502e' }}  hideNavBar={true} initial>
                    <Scene key='home'
                        icon={({focused}) => (
                            <Icon name='home'
                            size={30}
                            color={focused ? '#33502e' : 'lightgrey'} />
                        )}>
                        <Scene key='homepage'
                            component={HomeScreen}
                            hideNavBar={false}
                            navigationBarTitleImage={require('../assets/icon/logo/paradise-logo.png')}
                            navigationBarTitleImageStyle={{height: 50, resizeMode: 'contain'}}
                            navigationBarStyle={{ height: 70, backgroundColor: '#e6eaab', borderBottomWidth: 0 }}
                            renderRightButton={() => ( <Icon name='person-add' iconStyle={{ fontSize: 30, color: 'white', paddingRight: 15 }} /> )}>
                        </Scene>
                        <Scene key='tracking'
                            component={TrackingScreen}
                            hideNavBar={false}
                            title='Tracking'
                            titleStyle={{ color: '#aacf68', fontSize: 20 }}
                            navigationBarStyle={{ height: 70,backgroundColor: '#e6eaab' }}>
                        </Scene>
                    </Scene>
                    <Scene key='setting'
                        component={SettingScreen}
                        hideNavBar={false}
                        icon={({focused}) => (
                            <Icon name='settings'
                            size={30}
                            color={focused ? '#33502e' : 'lightgrey'} />
                        )}
                        title='Settings'
                        titleStyle={{ color: '#aacf68', fontSize: 20 }}
                        navigationBarStyle={{ height: 40,backgroundColor: '#e6eaab' }}>
                    </Scene>
                </Scene>
            </Stack>
        </Router>
    )
}

export default RouterComponent