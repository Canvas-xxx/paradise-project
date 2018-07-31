import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Buffer } from 'buffer'
import CardBox from '../../components/login/CardBox'
import ButtonComponent from '../../components/login/ButtonComponent'
import InputComponent from '../../components/login/InputComponent'
import store from '../../store'

export interface Props {
    
}

interface State {
    username: string,
    password: string,
    USER_PAR_SEQ_ID: string,
    user: any,
    senderId: string
}

class LoginScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            USER_PAR_SEQ_ID: '',
            user: {},
            senderId: ''
        }
    }

    public setUser() {
        store.dispatch({ 
            type: 'FETCH_USER',
            payload: {
                username: this.state.username,
                password: new Buffer(this.state.password).toString('base64')
            }
        })
        const that = this
        setTimeout( function() {
            if (store.getState().user['USER_ID']) {
                AsyncStorage.setItem('id', that.state.user.USER_PAR_SEQ_ID.toString())
                AsyncStorage.getItem('id').then((user) => {
                    if(user) {
                        store.dispatch({ type: 'FETCH_SENDER', payload: { username: that.state.username, senderId: that.state.senderId } })
                        Actions.home()
                    }
                })
            }
        }, 1000)
    }

    componentWillMount() {
        store.subscribe(() => { return this.setState(store.getState()) })
        store.dispatch({ type: '' })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.imageStyle} source={require('../../../assets/icon/logo/paradise-logo.png')} />
                </View>
                <CardBox key='login'>
                    <InputComponent placeholder='Username' icon='email' secure={false} handle={(text: any) => {this.setState({ username: text })}} />
                    <InputComponent placeholder='Password' icon='lock' secure={true} handle={(text: any) => {this.setState({ password: text })}} />
                    <ButtonComponent name='SIGN IN' color='#aacf68' function={() => {this.setUser()}} />
                    <TouchableOpacity style={{marginTop: 15}} onPress={() => {Actions.forgot()}}>
                        <Text style={{fontSize: 12, color: '#33502e'}}>Forgot your password?</Text>
                    </TouchableOpacity>
                </CardBox>
            </View>
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
    }
})

export default LoginScreen