import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

export interface Props {
    icon: string
    placeholder: string
    secure: boolean
}

interface State {
    icon: string
    placeholder: string,
    secure: boolean
}

export default class InputComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            icon: props.icon,
            placeholder: props.placeholder,
            secure: props.secure
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Icon iconStyle={styles.iconStyle} name={this.state.icon} />
                <TextInput 
                    style={styles.inputStyle} 
                    placeholder={this.state.placeholder}
                    secureTextEntry={this.state.secure}
                    autoCapitalize='none' />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#cbe166',
        marginBottom: 20
    },
    iconStyle: {
        color: '#cbe166',
        fontSize: 25
    },
    inputStyle: {
        flex: 1,
        fontSize: 16,
        color: '#cbe166',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 15,
        paddingBottom: 15
    }
})