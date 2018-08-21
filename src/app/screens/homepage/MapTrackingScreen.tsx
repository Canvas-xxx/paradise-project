import React from 'react'
import { View, StyleSheet } from 'react-native'
import store from '../../store'

import MapViewComponent from '../../components/map/MapViewComponent'

export interface Props {
    busId: number,
    schoolId: number
}

interface State {
    
}

class MapTrackingScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    interval: any

    componentDidMount() {
        store.dispatch({ type: 'FETCH_BUS_LOCATION', payload: {
            busId: this.props.busId,
            schoolId: this.props.schoolId
        } })

        const that = this
        this.interval = setInterval( function() {
            store.dispatch({ type: 'FETCH_BUS_LOCATION', payload: {
                busId: that.props.busId,
                schoolId: that.props.schoolId
            } })
        }, 60000 * 5)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <View style ={styles.container}>
                <MapViewComponent />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})

export default MapTrackingScreen
