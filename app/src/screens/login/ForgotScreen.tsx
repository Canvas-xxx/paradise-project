import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import CardBox from '../../components/login/CardBox'
import ButtonComponent from '../../components/login/ButtonComponent'
import InputComponent from '../../components/login/InputComponent'

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
                    <InputComponent icon='email' placeholder='Your email address' secure={false} />
                    <ButtonComponent name='SEND TO EMAIL' color='#aacf68' function={() => {}} />
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
    }
})

export default ForgotScreen