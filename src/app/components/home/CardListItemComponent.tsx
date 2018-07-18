import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

export interface Props {
    details: any
}

interface State {
    details: any
}

class CardListItemComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            details: props.details
        }
    }

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => {Actions.trackingDetail()}} >
                <View style={styles.bodyContain}>
                    <Text style={styles.titleText}>LAST STATE</Text>
                    <Text style={styles.detailText}>TIME</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
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