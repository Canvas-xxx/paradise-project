import React from 'react'
import { Platform, ActivityIndicator, AsyncStorage } from 'react-native'
import { Router, Scene, Stack } from 'react-native-router-flux'
import { Icon } from 'react-native-elements'
import LoginScreen from './screens/login/LoginScreen'
import ForgotScreen from './screens/login/ForgotScreen'
import HomeScreen from './screens/homepage/HomeScreen'
import TrackingScreen from './screens/homepage/TrackingScreen'
import TrackingDetailScreen from  './screens/homepage/TrackingDetailScreen'
import SettingScreen from './screens/setting/SettingScreen'

export interface Props {

}

interface State {
    authen: boolean,
    isLoading: boolean
}

class RouterComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            authen: false,
            isLoading: false
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('id').then((user) => {
            this.setState({
                authen: user !== null,
                isLoading: true
            })
        })
    }
    
    render() {
        if(!this.state.isLoading) {
            return(
                <ActivityIndicator />
            )
        } else {
            if (Platform.OS === 'ios') {
                return (
                    <Router>
                        <Stack key='root'>
                            <Scene key='auth' hideNavBar={true} initial={!this.state.authen}>
                                <Scene key='login' component={LoginScreen} hideNavBar={true} />
                                <Scene key='forgot' component={ForgotScreen} hideNavBar={true} />
                            </Scene>
                            <Scene key='main' tabs={true} showLabel={false} tabBarStyle={{ backgroundColor: '#f5f5f5', borderTopWidth: 1, borderTopColor: '#33502e' }}  hideNavBar={true} initial={this.state.authen}>
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
                                        navigationBarStyle={{ height: 70, backgroundColor: '#e6eaab', borderBottomWidth: 0 }}>
                                    </Scene>
                                    <Scene key='tracking'
                                        component={TrackingScreen}
                                        hideNavBar={false}
                                        title='Tracking'
                                        titleStyle={{ color: 'white', fontSize: 20 }}
                                        navigationBarStyle={{ height: 70,backgroundColor: '#e6eaab' }}>
                                    </Scene>
                                    <Scene key='trackingDetail'
                                        component={TrackingDetailScreen}
                                        hideNavBar={false}
                                        title='TrackingDetail'
                                        titleStyle={{ color: 'white', fontSize: 20 }}
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
                                    titleStyle={{ color: 'white', fontSize: 20 }}
                                    navigationBarStyle={{ height: 40,backgroundColor: '#e6eaab' }}>
                                </Scene>
                            </Scene>
                        </Stack>
                    </Router>
                )
            } else {
                return (
                    <Router>
                        <Stack key='root'>
                            <Scene key='auth' hideNavBar={true} initial={!this.state.authen}>
                                <Scene key='login' component={LoginScreen} hideNavBar={true} />
                                <Scene key='forgot' component={ForgotScreen} hideNavBar={true} />
                            </Scene>
                            <Scene key='main' tabs={true} tabBarPosition='bottom' showLabel={false} tabBarStyle={{ backgroundColor: '#f5f5f5', borderTopWidth: 1, borderTopColor: '#33502e' }}  hideNavBar={true} initial={this.state.authen}>
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
                                        navigationBarTitleImageStyle={{height: 50, width: 150, resizeMode: 'contain'}}
                                        navigationBarStyle={{ height: 70, backgroundColor: '#e6eaab', borderBottomWidth: 0 }}>
                                    </Scene>
                                    <Scene key='tracking'
                                        component={TrackingScreen}
                                        hideNavBar={false}
                                        title='Tracking'
                                        titleStyle={{ color: 'white', fontSize: 20 }}
                                        navigationBarStyle={{ height: 70,backgroundColor: '#e6eaab' }}>
                                    </Scene>
                                    <Scene key='trackingDetail'
                                        component={TrackingDetailScreen}
                                        hideNavBar={false}
                                        title='TrackingDetail'
                                        titleStyle={{ color: 'white', fontSize: 20 }}
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
                                    titleStyle={{ color: 'white', fontSize: 20 }}
                                    navigationBarStyle={{ height: 40,backgroundColor: '#e6eaab' }}>
                                </Scene>
                            </Scene>
                        </Stack>
                    </Router>
                )
            }
        }
    }
}

export default RouterComponent