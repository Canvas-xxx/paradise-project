import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import store from '../../store'

export interface Props {

}

interface State {
    SCH_NAME_TH: string,
    TECH_NAME: string,
    TECH_PHONE: string,
    DRV_NAME: string,
    DRV_PHONE: string,
    BUS_LICENSE_PLATE: string,
    SBT_DATE_START: string,
    SBT_DATE_END: string,
    SBT_STATUS: string
}

class DetailBoxComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            SCH_NAME_TH: '',
            TECH_NAME: '',
            TECH_PHONE: '',
            DRV_NAME: '',
            DRV_PHONE: '',
            BUS_LICENSE_PLATE: '',
            SBT_DATE_START: '',
            SBT_DATE_END: '',
            SBT_STATUS: ''
        }
    }

    componentDidMount() {
        store.subscribe(() => { return this.setState(store.getState().state) })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bodyContain}>
                    <Text style={styles.textTitle}>{this.state.SCH_NAME_TH}</Text>
                </View>
                <View style={styles.bodyContain}>
                    <Text style={styles.textContain}>Teacher: </Text>
                    <Text style={styles.textContain}>{this.state.TECH_NAME}</Text>
                    <Text style={styles.textContain}>{this.state.TECH_PHONE}</Text>
                </View>
                <View style={styles.bodyContain}>
                    <Text style={styles.textContain}>Driver: </Text>
                    <Text style={styles.textContain}>{this.state.DRV_NAME}</Text>
                    <Text style={styles.textContain}>{this.state.DRV_PHONE}</Text>
                </View>
                <View style={styles.bodyContain}>
                    <Text style={styles.textContain}>License plate: </Text>
                    <Text style={styles.textContain}>{this.state.BUS_LICENSE_PLATE}</Text>
                </View>
                <View style={styles.bodyContain}>
                    <Text style={styles.textContain}>{this.state.SBT_DATE_START}</Text>
                    <Text style={styles.textContain}>{this.state.SBT_DATE_END}</Text>
                </View>
                <View style={styles.bodyContain}>
                    <Text style={styles.textContain}>Status: </Text>
                    <Text style={styles.textContain}>{this.state.SBT_STATUS}</Text>
                </View>
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
        marginBottom: 5
    },
    textTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
    textContain: {
        flex: 1,
        textAlign: 'center'
    }
})

export default DetailBoxComponent