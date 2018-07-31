import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import store from '../../store'

export interface Props {

}

interface State {
    stateList: any
}

class DetailBoxComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            stateList: []
        }
    }

    objectList: Object = [{
        Status: 'No data.',
        STX_CREATE_DATE: 'No data.'
    }]

    componentDidMount() {
        store.subscribe(() => { return this.setState(store.getState().state) })
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
    }

    renderDateFormat(date: any) {
        if(date !== 'No data.') {
            const newDate = new Date(date)
            const dd = (newDate.getDate().toString().length === 1 ? '0' + newDate.getDate() : newDate.getDate()).toString()
            const mm = (newDate.getMonth().toString().length === 1 ? '0' + newDate.getMonth() : newDate.getMonth()).toString()
            const yyyy = newDate.getFullYear().toString()
            const hours = (newDate.getHours().toString().length === 1 ? '0' + newDate.getHours() : newDate.getHours()).toString()
            const minutes = (newDate.getMinutes().toString().length === 1 ? '0' + newDate.getMinutes() : newDate.getMinutes()).toString()
            return dd + '/' + mm + '/' + yyyy + ' ' + (parseInt(hours) > 11 ? hours + ':' + minutes + ' pm.' : hours + ':' + minutes + ' am.')
        } else {
            return date
        }
    }

    renderList() {
        return (
            this.state.stateList.map( (item: any, index: number) => {
                return (
                    <View key={index} style={styles.container}>
                        <View style={styles.bodyContain}>
                            <Text style={styles.textTitle}>Status: </Text>
                            <Text style={styles.textContain}>{item.Status}</Text>
                        </View>
                        <View style={styles.bodyContain}>
                            <Text style={styles.textTitle}>Date: </Text>
                            <Text style={styles.textContain}>{this.renderDateFormat(item.STX_CREATE_DATE)}</Text>
                        </View>
                    </View>
                )
            } )
        )
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
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