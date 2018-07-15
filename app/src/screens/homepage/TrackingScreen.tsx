import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TrackingCardComponent from '../../components/home/TrackingCardComponent'

export interface Props {
    id: string
}

interface State {
    id: string,
    name: string,
    identifyId: string,
    dob: string
}

class TrackingScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            id: props.id,
            name: 'John Lennon',
            identifyId: '1101406066762',
            dob: '11 Aug 1998'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContain}>
                    <TrackingCardComponent name={this.state.name} identifyId={this.state.identifyId} dob={this.state.dob} />
                </View>
                <View style={{flex: 1}}></View>
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
    },
    cardContain: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default TrackingScreen