import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import store from '../../store'

export interface Props {
    
}

interface State {
    BUS_LICENSE_PLATE: string,
    TECH_NAME: string,
    TECH_PHONE: string,
    DRV_NAME: string,
    DRV_PHONE: string,
    SBT_SEQ_ID: string,
    SCH_SEQ_ID: string
}

class CardListItemComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            BUS_LICENSE_PLATE: '',
            TECH_NAME: '',
            TECH_PHONE: '',
            DRV_NAME: '',
            DRV_PHONE: '',
            SBT_SEQ_ID: '',
            SCH_SEQ_ID: ''
        }
    }

    componentDidMount() {
        store.subscribe(() => { return this.setState(store.getState().student) })
    }

    render() {
        return (
            <View style={styles.listContain}>
                <View style={styles.container} >
                        <View style={styles.bodyContain}>
                            <Text style={styles.titleText}>License plate: </Text>
                            <Text style={styles.detailText}>{this.state.BUS_LICENSE_PLATE}</Text>
                        </View>
                        <View style={styles.bodyContain}>
                            <Text style={styles.titleText}>Teacher: </Text>
                            <Text style={styles.detailText}>{this.state.TECH_NAME}</Text>
                        </View>
                        <View style={styles.bodyContain}>
                            <Text style={styles.titleText}>Teacher Tel: </Text>
                            <Text style={styles.detailText}>{this.state.TECH_PHONE}</Text>
                        </View>
                        <View style={styles.bodyContain}>
                            <Text style={styles.titleText}>Driver: </Text>
                            <Text style={styles.detailText}>{this.state.DRV_NAME}</Text>
                        </View>
                        <View style={styles.bodyContain}>
                            <Text style={styles.titleText}>Driver Tel: </Text>
                            <Text style={styles.detailText}>{this.state.DRV_PHONE}</Text>
                        </View>
                        <View style={styles.bodyContain}>
                            <Button title='Check Transaction' onPress={() => {Actions.trackingDetail({ id: this.state.SBT_SEQ_ID, school: this.state.SCH_SEQ_ID })}} />
                        </View>
                    </View>
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