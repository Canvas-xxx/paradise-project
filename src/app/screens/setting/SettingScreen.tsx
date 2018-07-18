import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export interface Props {

}

interface State {

}

class SettingScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>SettingPage</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})

export default SettingScreen