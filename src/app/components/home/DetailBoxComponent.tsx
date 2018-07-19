import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export interface Props {
    details: Object
}

interface State {
    details: Object
}

class DetailBoxComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bodyContain}>
                    <Text style={styles.textTitle}>SCHOOL NAME</Text>
                </View>
                <View style={styles.bodyContain}>
                    <Text style={styles.textContain}>TEACHER NAME</Text>
                    <Text style={styles.textContain}>TEACHER PHONE</Text>
                </View>
                <View style={styles.bodyContain}>
                    <Text style={styles.textContain}>DRIVER NAME</Text>
                    <Text style={styles.textContain}>DRIVER PHONE</Text>
                </View>
                <View style={styles.bodyContain}>
                    <Text style={styles.textContain}>BUS NUMBER</Text>
                    <Text style={styles.textContain}>TIME</Text>
                    <Text style={styles.textContain}>STATUS</Text>
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
        shadowOpacity: 1,
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