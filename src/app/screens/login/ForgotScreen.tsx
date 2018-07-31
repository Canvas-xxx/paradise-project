import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import CardBox from '../../components/login/CardBox'
import ButtonComponent from '../../components/login/ButtonComponent'

export interface Props {

}

interface State {

}

class ForgotScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <CardBox>
                    <View style={styles.textContain}>
                        <Text style={styles.text}>Please contact your school for information.</Text>
                    </View>
                    <ButtonComponent name='BACK' color='lightgrey' function={() => {Actions.pop()}} />
                </CardBox>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#e6eaab'
    },
    textContain: {
        backgroundColor: 'transparent',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    text: {
        fontSize: 14
    }
})

export default ForgotScreen