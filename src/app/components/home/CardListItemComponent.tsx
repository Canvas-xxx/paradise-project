import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import store from '../../store'

export interface Props {
    
}

interface State {
    stateList: any
}

class CardListItemComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            stateList: []
        }
    }

    componentDidMount() {
        store.subscribe(() => { return this.setState(store.getState().stateList) })
    }

    componentWillReceiveProps() {
        this.setState({
            stateList: store.getState().stateList
        })
    }

    renderList() {
        return (
            this.state.stateList.map( (item: any, index: string) => {
                return (
                    <TouchableOpacity key={index} style={styles.container} onPress={() => {Actions.trackingDetail({ id: item.SBT_SEQ_ID })}} >
                        <View style={styles.bodyContain}>
                            <Text style={styles.titleText}>{item.SBT_STATUS}</Text>
                            <Text style={styles.detailText}>{item.SBT_DATE_START}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })
        )
    }

    render() {
        return (
            <View style={styles.listContain}>
                {this.renderList()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listContain: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flexBasis: '90%',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: { width: 1, height: 5 },
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10
    },
    bodyContain: {
        flexBasis: '100%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    detailText: {
        fontSize: 14
    }
})

export default CardListItemComponent