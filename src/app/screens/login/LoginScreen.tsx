import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import CardBox from '../../components/login/CardBox'
import ButtonComponent from '../../components/login/ButtonComponent'
import InputComponent from '../../components/login/InputComponent'
import store from '../../store'
import { setUsername, setPassword } from '../../actions'

export interface Props {
    selectedPage: boolean
}

interface State {
    selectedPage: boolean
}

function authentication() {
    // return fetch('http://203.121.143.61:8099/authenticationLogin', 
    // { 
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //         username: 'test1',
    //         password: 'cGFzc3dvcmQNCg=='
    //     })
    // })
    //     .then((response) => response.json())
    //     .catch((error) => { console.log(error) })
    Actions.main()
}

function setUser(text: any) {
    // store.dispatch(setUsername(text))
}

function setPass(text: any) {
    // store.dispatch(setPassword(text))
}

class LoginScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            selectedPage: true
        }
    }

    componentDidMount() {
        store.subscribe(() => { return this.setState(store.getState()) })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.imageStyle} source={require('../../../assets/icon/logo/paradise-logo.png')} />
                </View>
                <View style={styles.selectContainer}>
                    <TouchableOpacity style={styles.tabs} disabled={this.state.selectedPage} onPress={() => {this.setState({selectedPage: true})}}>
                        {tabs(this.state.selectedPage, 'SIGN IN')}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabs} disabled={!this.state.selectedPage} onPress={() => {this.setState({selectedPage: false})}}>
                        {tabs(!this.state.selectedPage, 'SIGN UP')}
                    </TouchableOpacity>
                </View>
                {LoginPage(this.state.selectedPage)}
            </View>
        )
    }
}

const tabs = (state: boolean, title: string) => {
    if (state) {
        return (
            <View style={styles.tabsSelected}>
                <Text style={styles.selectedTabs}>{title}</Text>
            </View>
        )
    } else {
        return (
            <View style={styles.tabsNormal}>
                <Text style={styles.normalTabs}>{title}</Text>
            </View>
        )
    }
}

const LoginPage = (state: boolean) => {
    if (state) {
        return (
            <CardBox key='login'>
                <InputComponent placeholder='Username' icon='email' secure={false} handle={(text: any) => {setUser(text)}} />
                <InputComponent placeholder='Password' icon='lock' secure={true} handle={(text: any) => {setPass(text)}} />
                <ButtonComponent name='SIGN IN' color='#aacf68' function={() => {authentication()}} />
                <TouchableOpacity style={{marginTop: 15}} onPress={() => {Actions.forgot()}}>
                    <Text style={{fontSize: 12, color: '#33502e'}}>Forgot your password?</Text>
                </TouchableOpacity>
            </CardBox>
        )
    } else {
        return (
            <CardBox key='register'>
                <InputComponent placeholder='Name' icon='person' secure={false} handle={() => ({})} />
                <InputComponent placeholder='Username' icon='email' secure={false} handle={() => ({})} />
                <InputComponent placeholder='Password' icon='lock' secure={true} handle={() => ({})} />
                <InputComponent placeholder='Confirm Password' icon='lock' secure={true} handle={() => ({})} />
                <ButtonComponent name='SIGN UP' color='#aacf68' function={() => {}} />
            </CardBox>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: '10%',
        height: '100%',
        backgroundColor: '#e6eaab'
    },
    imageContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: '15%'
    },
    imageStyle: {
        width: 200,
        height: 80,
        resizeMode: 'contain'
    },
    selectContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '3%',
        marginRight: '3%',
        justifyContent: 'space-between'
    },
    tabs: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabsSelected: {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 50,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    tabsNormal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 50
    },
    selectedTabs: {
        fontSize: 20,
        color: '#33502e',
        opacity: 1
    },
    normalTabs: {
        fontSize: 18,
        color: '#629e3e',
        opacity: .8
    }
})

export default LoginScreen