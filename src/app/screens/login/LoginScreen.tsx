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
    senderId: string,
    USER_ID: string,
    USER_PASS: string,
    USER_PAR_SEQ_ID: string,
    USER_SCH_SEQ_ID: string,
    updateSender: boolean
}

class LoginScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            senderId: '',
            USER_ID: '',
            USER_PASS: '',
            USER_PAR_SEQ_ID: '',
            USER_SCH_SEQ_ID: '',
            updateSender: false
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
    }

    componentWillMount() {
        store.subscribe(() => { return this.setState(store.getState().user) })
        store.subscribe(() => { return this.setState({ senderId: store.getState().senderId }) })
    }

    componentDidUpdate() {
        try {
            if(this.state.USER_ID) {
                AsyncStorage.setItem('id', JSON.stringify({
                    id: this.state.USER_PAR_SEQ_ID,
                    username: this.state.USER_ID,
                    password: this.state.USER_PASS
                }))
                AsyncStorage.setItem('user', JSON.stringify({
                    username: this.state.USER_ID,
                    senderId: this.state.senderId,
                    schoolId: this.state.USER_SCH_SEQ_ID,
                    parentId: this.state.USER_PAR_SEQ_ID
                }))
                if(!this.state.updateSender) {
                    store.dispatch({
                        type: 'FETCH_SENDER',
                        payload: { 
                            username: this.state.USER_ID,
                            senderId: this.state.senderId,
                            schoolId: this.state.USER_SCH_SEQ_ID,
                            parentId: this.state.USER_PAR_SEQ_ID
                        } 
                    })
                    this.setState({
                        updateSender: true
                    })
                }
                Actions.home()
            }
        } catch(e) {
            // alert('Invalid username or password.')
        }
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