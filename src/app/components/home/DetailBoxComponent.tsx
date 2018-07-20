import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import store from '../../store'

export interface Props {

}

interface State {
    id: string,
    school: string,
    teacher: string,
    teacherPhone: string,
    driver: string,
    driverPhone: string,
    bus: string,
    start: string,
    end: string,
    status: string
}

class DetailBoxComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            id: '',
            school: '',
            teacher: '',
            teacherPhone: '',
            driver: '',
            driverPhone: '',
            bus: '',
            start: '',
            end: '',
            status: ''
        }
    }

    componentDidMount() {
        store.subscribe(() => { return this.setState(store.getState().state) })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bodyContain}>
                    <Text style={styles.textTitle}>{this.state.school}</Text>
                </View>
                <View style={styles.bodyContain}>
                    <Text style={styles.textContain}>Teacher: </Text>
                    <Text style={styles.textContain}>{this.state.teacher}</Text>
                    <Text style={styles.textContain}>{this.state.teacherPhone}</Text>
                </View>
                <View style={styles.bodyContain}>
                    <Text style={styles.textContain}>Driver: </Text>
                    <Text style={styles.textContain}>{this.state.driver}</Text>
                    <Text style={styles.textContain}>{this.state.driverPhone}</Text>
                </View>
                <View style={styles.bodyContain}>
                    <Text style={styles.textContain}>License plate: </Text>
                    <Text style={styles.textContain}>{this.state.bus}</Text>
                </View>
                <View style={styles.bodyContain}>
                    <Text style={styles.textContain}>{this.state.start}</Text>
                    <Text style={styles.textContain}>{this.state.end}</Text>
                </View>
                <View style={styles.bodyContain}>
                    <Text style={styles.textContain}>Status: </Text>
                    <Text style={styles.textContain}>{this.state.status}</Text>
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