import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TrackingCardComponent from '../../components/home/TrackingCardComponent'
import CardListItemComponent from '../../components/home/CardListItemComponent'

export interface Props {
    id: string
}

interface State {
    id: string,
    name: string,
    identifyId: string,
    dob: string
}

const object: any[] = [
    { id: 'index1', process: 'Start on the route', time: '07.30 am' },
    { id: 'index2', process: 'On the route', time: '07.45 am' },
    { id: 'index3', process: 'End the route', time: '08.00 am' }
]

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
                <View style={styles.listContain}>
                    {renderList(object)}
                </View>
            </View>
        )
    }
}

const renderList = (items: any[]) => {
    return ( 
        items.map( (item, index) => {
            return ( 
                <CardListItemComponent key={index} details={item} /> 
            )
        } )
    )
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
    },
    listContain: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default TrackingScreen