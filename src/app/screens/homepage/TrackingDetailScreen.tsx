import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import DetailBoxComponent from '../../components/home/DetailBoxComponent'
import store from '../../store'
import { setStateDetail } from '../../actions'

export interface Props {
    id: string
}

interface State {
    SBT_SEQ_ID: string
}

class TrackingDetailScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            SBT_SEQ_ID: props.id
        }
    }

    componentDidMount() {
        store.subscribe(() => { return this.setState(store.getState().state) })
        store.dispatch({ type: 'FETCH_STATE', payload: { SBT_SEQ_ID: this.state.SBT_SEQ_ID } })
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