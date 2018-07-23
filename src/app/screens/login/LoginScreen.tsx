import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import CardBox from '../../components/login/CardBox'
import ButtonComponent from '../../components/login/ButtonComponent'
import InputComponent from '../../components/login/InputComponent'
import store from '../../store'

export interface Props {
    
}

interface State {
    username: string,
    password: string,
    USER_PAR_SEQ_ID: string
}

class LoginScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            USER_PAR_SEQ_ID: ''
        }
    }

    public setUser() {
        store.dispatch({ 
            type: 'FETCH_USER',
            payload: {
                username: this.state.username,
                password: this.state.password 
            }
        })
        const that = this
        setTimeout( function() {
            if (store.getState().user['USER_ID']) {
                Actions.home({ id: that.state.USER_PAR_SEQ_ID })
            }
        }, 1000)
    }

    componentWillMount() {
        store.subscribe(() => { return this.setState(store.getState().user) })
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