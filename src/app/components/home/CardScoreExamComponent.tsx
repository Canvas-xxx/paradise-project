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
                            <Text numberOfLines={1} style={styles.textScore}>{this.convertDate(item.SCRE_EXAM_DATE)}</Text>
                            <Text numberOfLines={1} style={styles.textScore}>{item.SCRE_SUBJECT}</Text>
                            <Text numberOfLines={1} style={styles.textScore}>{item.SCRE_SCORE}</Text>
                            <Text numberOfLines={1} style={styles.textScore}>{item.SCRE_FULL_MARKS}</Text>
                        </View>
                    )
                })
            )
        }
    }

    convertDate = (date: string) => {
        if(date) {
            const newDate = new Date(date)
            const month = newDate.getMonth() + 1
            const day = newDate.getDate()
            return newDate.getFullYear() + '/' + (month > 9 ? month : '0' + month) + '/' + (day > 9 ? day : '0' + day)
        }

        return ''
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.scoreContain}>
                    <Text numberOfLines={1} style={styles.textHead}>Date</Text>
                    <Text numberOfLines={1} style={styles.textHead}>Subject</Text>
                    <Text numberOfLines={1} style={styles.textHead}>Score</Text>
                    <Text numberOfLines={1} style={styles.textHead}>MaxScore</Text>
                </View>
                {this.renderList()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 'auto',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 15
    }, scoreContain: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    }, textScore: {
        color: 'black',
        fontSize: 12,
        flex: 1
    },textHead: {
        color: 'black',
        fontSize: 16,
        flex: 1,
        fontWeight: 'bold'
    }
})

export default CardScoreExamComponent