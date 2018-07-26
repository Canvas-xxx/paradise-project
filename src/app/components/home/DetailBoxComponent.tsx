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
        SCH_NAME_TH: 'No data.',
        TECH_NAME: 'No data.',
        TECH_PHONE: 'No data.',
        DRV_NAME: 'No data.',
        DRV_PHONE: 'No data.',
        BUS_LICENSE_PLATE: 'No data.',
        SBT_DATE_START: 'No data.',
        SBT_DATE_END: 'No data.',
        SBT_STATUS: 'No data.'
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

    renderList() {
        return (
            this.state.stateList.map( (item: any, index: number) => {
                return (
                    <View key={index}>
                        <View style={styles.bodyContain}>
                            <Text style={styles.textTitle}>Status: </Text>
                            <Text style={styles.textContain}>{item.SBT_STATUS}</Text>
                        </View>
                        <View style={styles.bodyContain}>
                            <Text style={styles.textTitle}>Date: </Text>
                            <Text style={styles.textContain}>{item.SBT_DATE_START}</Text>
                        </View>
                        <View style={styles.bodyContain}>
                            <Text style={styles.textTitle}>Time: </Text>
                            <Text style={styles.textContain}>{item.SBT_DATE_START}</Text>
                        </View>
                    </View>
                )
            } )
        )
    }

    render() {
        return (
            <View style={styles.container}>
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
        flex: 1,
        textAlign: 'left'
    }
})

export default DetailBoxComponent