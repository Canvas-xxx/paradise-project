import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import store from '../../store'

export interface Props {
    
}

interface State {
    SCH_NAME_TH: string,
    STU_RFID_SEQ_ID: string,
    STU_NAME_TH: string,
    STU_CLASS: string
}

class TrackingCardComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            SCH_NAME_TH: '',
            STU_RFID_SEQ_ID: '',
            STU_NAME_TH: '',
            STU_CLASS: ''
        }
    }

    componentDidMount() {
        store.subscribe(() => { return this.setState(store.getState().student) })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.title}>PARADISE SAFETY</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.leftSide}>
                        <Image style={styles.imageStyle} source={{uri: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'}} />
                    </View>
                    <View style={styles.rightSide}>
                        <View style={styles.textContain}>
                            <Text style={styles.rightTitle}>School Name: </Text>
                            <Text style={styles.rightDetail}>{this.state.SCH_NAME_TH}</Text>
                        </View>
                        <View style={styles.textContain}>
                            <Text style={styles.rightTitle}>Student ID: </Text>
                            <Text style={styles.rightDetail}>{this.state.STU_RFID_SEQ_ID}</Text>
                        </View>
                        <View style={styles.textContain}>
                            <Text style={styles.rightTitle}>Student Name: </Text>
                            <Text style={styles.rightDetail}>{this.state.STU_NAME_TH}</Text>
                        </View>
                        <View style={styles.textContain}>
                            <Text style={styles.rightTitle}>Class: </Text>
                            <Text style={styles.rightDetail}>{this.state.STU_CLASS}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 200,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: .5,
        shadowRadius: 15,
        margin: 15
    },
    head: {
        flex: 1,
        width: '100%',
        backgroundColor: '#639c45',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    body: {
        flex: 4,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftSide: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        height: '70%',
        width: '80%',
        resizeMode: 'cover',
        borderWidth: 2,
        borderColor: '#639c45'
    },
    textContain: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightSide: {
        flex: 1.5,
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10
    },
    rightTitle: {
        flex: 1,
        fontSize: 12,
        color: 'black'
    },
    rightDetail: {
        flex: 2,
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black'
    }
})

export default TrackingCardComponent