import React from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import store from '../../store'

export interface Props {

}

interface State {

}

class AnnounceScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.containerScroll}>
                    <Text style={{textAlign: 'center'}}>AnnounceScreen</Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'blue',
        paddingTop: 10,
        paddingBottom: 10
    },
    containerScroll: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        backgroundColor: 'yellow'
    }
})

export default AnnounceScreen
