import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import store from '../../store'

export interface Props {

}

interface State {
    scoreList: any[]
}

class CardScoreExamComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            scoreList: []
        }
    }

    unsubscribe: any

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => { return this.setState({ scoreList: store.getState().score }) })
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    renderList = () => {
        if(this.state.scoreList.length > 0) {
            return (
                this.state.scoreList.map((item: any, index: number) => {
                    return (
                        <View key={index} style={styles.scoreContain}>
                            <Text style={styles.textScore}>{item.SCRE_EXAM_DATE}</Text>
                            <Text style={styles.textScore}>{item.SCRE_SUBJECT}</Text>
                            <Text style={styles.textScore}>{item.SCRE_SCORE}</Text>
                            <Text style={styles.textScore}>{item.SCRE_FULL_MARKS}</Text>
                        </View>
                    )
                })
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.scoreContain}>
                    <Text style={styles.textHead}>Date</Text>
                    <Text style={styles.textHead}>Subject</Text>
                    <Text style={styles.textHead}>Score</Text>
                    <Text style={styles.textHead}>MaxScore</Text>
                </View>
                {this.renderList()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 15
    }, scoreContain: {
        width: '100%',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    }, textScore: {
        color: 'black',
        fontSize: 14,
        flex: 1
    },textHead: {
        color: 'black',
        fontSize: 16,
        flex: 1,
        fontWeight: 'bold'
    }
})

export default CardScoreExamComponent