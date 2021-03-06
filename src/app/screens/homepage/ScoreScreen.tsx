import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import store from '../../store'
import CardScoreExamComponent from '../../components/home/CardScoreExamComponent'

export interface Props {
    studentId: string,
    className: string,
    schoolId: string
}

interface State {
    studentId: string,
    className: string,
    schoolId: string
}

class ScoreScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            studentId: props.studentId,
            className: props.className,
            schoolId: props.schoolId
        }
    }

    componentDidMount() {
        store.dispatch({ type: 'FETCH_SCORE_EXAM', payload: { studentId: this.state.studentId, className: this.state.className, schoolId: this.state.schoolId } })
    }

    render() {
        return(
            <View style={styles.container}>
                <ScrollView style={styles.scroll}>
                    <CardScoreExamComponent />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        width: '100%',
        alignItems: 'center'
    }, scroll: {
        width: '90%',
        height: '100%',
        paddingTop: 10,
        paddingBottom: 10
    }
})

export default ScoreScreen