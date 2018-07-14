import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

export interface Props {
    name: string
    color: string
    function: any
}

interface State {
    name: string,
    color: string,
    function: any
}

export default class ButtonComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            name: props.name,
            color: props.color,
            function: props.function
        }
    }

    render() {
        return (
            <View style={styles.constainer}>
                <Button title={this.state.name}
                    buttonStyle={styles.buttonStyle}
                    backgroundColor={this.state.color}
                    onPress={this.state.function}
                    fontSize={14} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    constainer: {
        backgroundColor: 'transparent',
        width: '100%'
    },
    buttonStyle: {
        width: '100%',
        borderRadius: 5
    }
})