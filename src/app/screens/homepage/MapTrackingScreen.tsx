import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import store from '../../store'

export interface Props {

}

interface State {

}

class MapTrackingScreen extends React.Component<Props, State> {
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
                <Text>MapTrackingScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default MapTrackingScreen
