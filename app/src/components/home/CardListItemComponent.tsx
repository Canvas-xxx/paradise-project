import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

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
            <View style={styles.container}>
                <View style={styles.bodyContain}>
                    <Text style={styles.titleText}>{this.state.details.process}</Text>
                    <Text style={styles.detailText}>{this.state.details.time}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexBasis: '90%',
        backgroundColor: 'white',
        // borderRadius: 15,
        // borderBottomWidth: 2,
        // borderColor: '#639c45',
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: { width: 1, height: 5 },
        // shadowRadius: 15,
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