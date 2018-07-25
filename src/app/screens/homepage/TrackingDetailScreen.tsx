import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import DetailBoxComponent from '../../components/home/DetailBoxComponent'
import store from '../../store'

export interface Props {
    id: string
}

interface State {
    STU_SEQ_ID: string,
    SCH_SEQ_ID: string
}

class TrackingDetailScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            STU_SEQ_ID: props.id,
            SCH_SEQ_ID: props.id
        }
    }

    componentDidMount() {
        store.subscribe(() => { return this.setState(store.getState().stateList) })
        store.dispatch({ type: 'FETCH_STATE_LIST', payload: { STU_SEQ_ID: this.state.STU_SEQ_ID, SCH_SEQ_ID: this.state.SCH_SEQ_ID } })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollContain}>
                    <View style={styles.bodyScroll}>
                        <DetailBoxComponent />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    scrollContain: {
        flex: 1,
        width: '100%'
    },
    bodyScroll: {
        flexWrap: 'wrap',
        width: '100%',
        paddingTop: 30,
        paddingBottom: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default TrackingDetailScreen