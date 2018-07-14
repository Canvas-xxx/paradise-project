import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import CardBox from '../../components/login/CardBox'
import ButtonComponent from '../../components/login/ButtonComponent'
import InputComponent from '../../components/login/InputComponent'

export interface Props {
    selectedPage: boolean
}

interface State {
    selectedPage: boolean
}

class LoginScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            selectedPage: true
        }
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
            <CardBox>
                <InputComponent placeholder='Username' icon='email' secure={false} />
                <InputComponent placeholder='Password' icon='lock' secure={true} />
                <ButtonComponent name='SIGN IN' function='test' />
            </CardBox>
        )
    } else {
        return (
            <CardBox>
                <InputComponent placeholder='Name' icon='person' secure={false} />
                <InputComponent placeholder='Username' icon='email' secure={false} />
                <InputComponent placeholder='Password' icon='lock' secure={true} />
                <InputComponent placeholder='Confirm Password' icon='lock' secure={true} />
                <ButtonComponent name='SIGN UP' function='test' />
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