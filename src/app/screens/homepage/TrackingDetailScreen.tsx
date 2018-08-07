import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import DetailBoxComponent from '../../components/home/DetailBoxComponent'
import store from '../../store'

export interface Props {
    studentId: string,
    schoolId: string
}

interface State {
    STU_SEQ_ID: string,
    SCH_SEQ_ID: string,
    STU_NAME_TH: string
}

class TrackingDetailScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            STU_SEQ_ID: props.studentId,
            SCH_SEQ_ID: props.schoolId,
            STU_NAME_TH: ''
        }
    }

    unsubscribe: any

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => { this.setState(store.getState().stateList), this.setState({ STU_NAME_TH: store.getState().student.STU_NAME_TH }) })
        // store.dispatch({ type: 'FETCH_STUDENT', payload: { STU_SEQ_ID: this.state.STU_SEQ_ID } })
        store.dispatch({ type: 'FETCH_STATE_LIST', payload: { STU_SEQ_ID: this.state.STU_SEQ_ID, SCH_SEQ_ID: this.state.SCH_SEQ_ID } })
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollContain}>
                    <View style={styles.bodyScroll}>
                        <DetailBoxComponent studentName={this.state.STU_NAME_TH} />
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