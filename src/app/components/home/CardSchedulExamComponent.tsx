import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import store from '../../store'

export interface Props {

}

interface State {
    schedulList: any[]
}

class CardSchedulExamComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            schedulList: []
        }
    }

    unsubscribe: any

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => { return this.setState({ schedulList: store.getState().schedul }) })
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    renderList = () => {
        if(this.state.schedulList.length > 0) {
            return (
                this.state.schedulList.map((item: any, index: number) => {
                    return (
                        <View key={index} style={styles.scoreContain}>
                            <Text numberOfLines={1} style={styles.textScore}>{this.convertDate(item.SCHE_EXAM_DATE)}</Text>
                            <Text numberOfLines={1} style={styles.textScore}>{item.SCHE_ROUND}</Text>
                            <Text numberOfLines={1} style={styles.textScore}>{item.SCHE_STU_CLASS}</Text>
                            <Text numberOfLines={1} style={styles.textScore}>{item.SCHE_SUBJECT}</Text>
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
                    <Text numberOfLines={1} style={styles.textHead}>Round</Text>
                    <Text numberOfLines={1} style={styles.textHead}>Class</Text>
                    <Text numberOfLines={1} style={styles.textHead}>Subject</Text>
                </View>
                {this.renderList()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
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

export default CardSchedulExamComponent