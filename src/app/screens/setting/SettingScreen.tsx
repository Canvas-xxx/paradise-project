import React from 'react'
import { View, Text, StyleSheet, AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Buffer } from 'buffer'
import ButtonComponent from '../../components/login/ButtonComponent'
import InputComponent from '../../components/login/InputComponent'

export interface Props {

}

interface State {
    USER_ID: string,
    password: string
}

class SettingScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            USER_ID: '',
            password: ''
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('id').then( item => {
            const userObj: any = JSON.parse(item)
            this.setState({
                USER_ID: userObj['username']
            })
        })
    }

    logoutUser() {
        AsyncStorage.getItem('user').then( item => {
            const obj: any = JSON.parse(item)
            this.deleteSender(obj['senderId'], function(response: any) {
                if (response.status === 200) {
                    AsyncStorage.removeItem('id')
                    AsyncStorage.removeItem('user')
                    Actions.auth()
                } else {
                    alert('Fail')
                }
            })
        }).catch( error => {
            console.log(error)
        })
    }

    deleteSender(id: string, callback: any) {
        fetch('http://203.121.143.61:8099/deleteSenderID', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                senderId: id
            }
        }).then((response) => {
            callback(response)
        }).catch((error) => {
            callback(error)
        })
    }

    changePassword() {
        AsyncStorage.getItem('user').then( item => {
            const obj: any = JSON.parse(item)
            fetch('http://203.121.143.61:8099/updateUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: obj['username'],
                password: new Buffer(this.state.password).toString('base64') 
            })
        }).then((response) => {
            console.log(response)
            alert('Success')
        }).catch((error) => {
            console.log(error)
            alert('Error')
        })
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{width: '90%', backgroundColor: 'white', padding: 15, borderRadius: 15, marginBottom: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{width: '100%', textAlign: 'left'}}>Username: {this.state.USER_ID}</Text>
                    <InputComponent placeholder='Change your password' icon='lock' secure={true} handle={(text: any) => {this.setState({ password: text })}} />
                    <ButtonComponent name='CHANGE' color='#aacf68' function={() => {this.changePassword()}} />
                </View>
                <ButtonComponent name='LOG OUT' color='#aacf68' function={() => {this.logoutUser()}} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 30,
        paddingBottom: 30
    }
})

export default SettingScreen