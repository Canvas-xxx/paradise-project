import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import store from '../../store'

import MapView, { Marker } from 'react-native-maps'

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
            // <View style={styles.container}>
            //     <Text>MapTrackingScreen</Text>
            // </View>
            <View style ={styles.container}>
                <MapView
                    style={styles.map}
                    region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.0001,
                    }}
                >
                    <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324}}>
                    </Marker>
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center'
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
})

export default MapTrackingScreen
