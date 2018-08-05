import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import TrackingCardComponent from '../../components/home/TrackingCardComponent'
import CardListItemComponent from '../../components/home/CardListItemComponent'
import store from '../../store'

export interface Props {
    id: string
}

interface State {
    STU_SEQ_ID: string
}

class TrackingScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            STU_SEQ_ID: props.id
        }
    }

    componentDidMount() {
        // store.subscribe(() => { return this.setState(store.getState().student) })
        store.dispatch({ type: 'FETCH_STUDENT', payload: { STU_SEQ_ID: this.state.STU_SEQ_ID } })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{flex: 1, width: '100%'}}>
                    <View style={styles.cardContain}>
                        <TrackingCardComponent />
                    </View>
                    <View style={{flex: 1}}>
                        <CardListItemComponent />
                    </View>
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