import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
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
                    <View key={index} style={styles.container} >
                        <View style={styles.bodyContain}>
                            <Text style={styles.titleText}>License plate: </Text>
                            <Text style={styles.detailText}>{item.BUS_LICENSE_PLATE}</Text>
                        </View>
                        <View style={styles.bodyContain}>
                            <Text style={styles.titleText}>Teacher: </Text>
                            <Text style={styles.detailText}>{item.TECH_NAME}</Text>
                        </View>
                        <View style={styles.bodyContain}>
                            <Text style={styles.titleText}>Teacher Tel: </Text>
                            <Text style={styles.detailText}>{item.TECH_PHONE}</Text>
                        </View>
                        <View style={styles.bodyContain}>
                            <Text style={styles.titleText}>Driver: </Text>
                            <Text style={styles.detailText}>{item.DRV_NAME}</Text>
                        </View>
                        <View style={styles.bodyContain}>
                            <Text style={styles.titleText}>Driver Tel: </Text>
                            <Text style={styles.detailText}>{item.DRV_PHONE}</Text>
                        </View>
                        <View style={styles.bodyContain}>
                            <Button title='Check Transaction' onPress={() => {Actions.trackingDetail({ id: item.SBT_SEQ_ID })}} />
                        </View>
                    </View>
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
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '90%',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: { width: 1, height: 5 },
        flexDirection: 'column',
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
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5
    },
    titleText: {
        flex: 1,
        textAlign: 'left',
        fontSize: 16,
        fontWeight: 'bold'
    },
    detailText: {
        flex: 1,
        textAlign: 'left',
        fontSize: 14
    }
})

export default CardListItemComponent