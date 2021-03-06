import React from 'react'
import { Image, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import store from '../../store'

export interface Props {
    
}

interface State {
    latitude: number,
    longtitude: number
}

class MapViewComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            latitude: 0,
            longtitude: 0
        }
    }

    unsubscribe: any

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => { return this.setState({ latitude: parseFloat(store.getState().bus.POSB_LATITUDE), longtitude: parseFloat(store.getState().bus.POSB_LONGITUDE) }) })
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        if(!this.state.latitude) {
            return (
                <MapView
                    style={styles.map}
                    region={{
                    latitude: 0,
                    longitude: 0,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                    }}>
                    <Marker coordinate={{ latitude: 0, longitude: 0 }}>
                        <Image source={require('../../../assets/pins/pins_bus.png')} style={{ width: 40, height: 40 }} />
                    </Marker>
                </MapView>
            )
        } else {
            return (
                <MapView
                    style={styles.map}
                    region={{
                    latitude: this.state.latitude,
                    longitude: this.state.longtitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                    }}>
                    <Marker coordinate={{ latitude: this.state.latitude, longitude: this.state.longtitude }}>
                        <Image source={require('../../../assets/pins/pins_bus.png')} style={{ width: 40, height: 40 }} />
                    </Marker>
                </MapView>
            )
        }
    }
}

const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
})

export default MapViewComponent