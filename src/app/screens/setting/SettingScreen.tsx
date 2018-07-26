import React from 'react'
import { View, StyleSheet } from 'react-native'
import ButtonComponent from '../../components/login/ButtonComponent'
import { Actions } from 'react-native-router-flux'

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
                <ButtonComponent name='LOG OUT' color='#aacf68' function={() => {Actions.auth()}} />
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