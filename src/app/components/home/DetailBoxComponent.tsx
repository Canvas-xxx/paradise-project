import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import store from '../../store'

export interface Props {
    studentName: string
}

interface State {
    stateList: any,
    studentName: string
}

class DetailBoxComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            stateList: [],
            studentName: props.studentName
        }
    }

    objectList: Object = [{
        NAME: 'No data.',
        Status: 'No data.',
        DATE: 'No data.'
    }]

    unsubscribe: any

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => { return this.setState(store.getState().state) })
    }

    componentWillReceiveProps() {
        if (store.getState().stateList.length > 0) {
            this.setState({
                stateList: store.getState().stateList
            })
        } else {
            this.setState({
                stateList: this.objectList
            })
        }
        this.setState({
            studentName: this.props.studentName
        })
        console.log(this.state)
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    renderDateFormat(date: any) {
        if(date !== 'No data.') {
            const newDate = new Date(date)
            const dd = (newDate.getUTCDate() < 10 ? '0' + newDate.getUTCDate() : newDate.getUTCDate()).toString()
            const mm = ((newDate.getUTCMonth() + 1) < 10 ? '0' + (newDate.getUTCMonth() + 1) : newDate.getUTCMonth()).toString()
            const yyyy = newDate.getUTCFullYear().toString()
            const hours = (newDate.getUTCHours() < 10 ? '0' + newDate.getUTCHours() : newDate.getUTCHours()).toString()
            const minutes = (newDate.getUTCMinutes() < 10 ? '0' + newDate.getUTCMinutes() : newDate.getUTCMinutes()).toString()
            return dd + '/' + mm + '/' + yyyy + ' ' + (parseInt(hours) > 11 ? hours + ':' + minutes + ' pm.' : hours + ':' + minutes + ' am.')
        } else {
            return date
        }
    }

    renderName() {
        try {
            if (this.state.studentName !== undefined && this.state.studentName !== '') {
                return (
                    <View style={styles.container}>
                        <View style={styles.bodyContain}>
                            <Text style={styles.textTitle}>Name: </Text>
                            <Text style={styles.textContain}>{this.state.studentName}</Text>
                        </View>
                    </View>
                )
            } else {
                return (
                    <View style={styles.container}>
                        <View style={styles.bodyContain}>
                            <Text style={styles.textTitle}>Name: </Text>
                            <Text style={styles.textContain}>No Data.</Text>
                        </View>
                    </View>
                )
            }
        } catch(e) {
            return (
                <View style={styles.container}>
                    <View style={styles.bodyContain}>
                        <Text style={styles.textTitle}>Name: </Text>
                        <Text style={styles.textContain}>No Data.</Text>
                    </View>
                </View>
            )
        }
    }

    renderList() {
        return (
            this.state.stateList.map( (item: any, index: number) => {
                return (
                    <View key={index} style={styles.container}>
                        <View style={styles.bodyContain}>
                            <Text style={styles.textTitle}>Name: </Text>
                            <Text style={styles.textContain}>{item.NAME}</Text>
                        </View>
                        <View style={styles.bodyContain}>
                            <Text style={styles.textTitle}>Status: </Text>
                            <Text style={styles.textContain}>{item.Status}</Text>
                        </View>
                        <View style={styles.bodyContain}>
                            <Text style={styles.textTitle}>Date: </Text>
                            <Text style={styles.textContain}>{this.renderDateFormat(item.DATE)}</Text>
                        </View>
                    </View>
                )
            } )
        )
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                {/* {this.renderName()} */}
                {this.renderList()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: .3,
        shadowRadius: 15,
        marginBottom: 15,
        paddingTop: 10,
        paddingBottom: 10
    },
    bodyContain: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    textTitle: {
        flex: 1,
        textAlign: 'left',
        fontSize: 16,
        fontWeight: 'bold'
    },
    textContain: {
        flex: 2,
        textAlign: 'left'
    }
})

export default DetailBoxComponent