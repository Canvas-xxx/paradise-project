import React from 'react'
import { View, StyleSheet } from 'react-native'
import TrackingCardComponent from '../../components/home/TrackingCardComponent'
import CardListItemComponent from '../../components/home/CardListItemComponent'

export interface Props {
    id: string
}

interface State {
    id: string
}

const object: any[] = [
    { id: 'index1' },
    { id: 'index2' },
    { id: 'index3' }
]

class TrackingScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            id: props.id
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContain}>
                    <TrackingCardComponent details={object} />
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