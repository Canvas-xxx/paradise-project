import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

export interface Props {
    student: any
}

interface State {
    student: any
}

class ItemCardComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            student: props.student
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.cardBox} activeOpacity={.8} onPress={() => {Actions.tracking({ id: this.props.student.STU_SEQ_ID })}}>
                    {renderAvartar(null, this.state.student.STU_NAME_TH.split(' ')[0][0] + this.state.student.STU_NAME_TH.split(' ')[1][0])}
                    <Text style={styles.cardText}>{this.state.student.STU_NAME_TH}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const renderAvartar = (image: any, title: string) => {
    switch(image) {
        case null:
            return ( <Avatar medium rounded title={title} /> )
        default:
            return ( <Avatar medium rounded title={title} source={{uri: image}} /> )
    }
} 

const styles = StyleSheet.create({
    container: {
        height: 150,
        backgroundColor: 'transparent',
        flexBasis: '50%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardBox: {
        width: '90%',
        height: '90%',
        backgroundColor: 'white',
        flexDirection : 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 15,
    },
    cardText: {
        fontSize: 14,
        color: '#639c45',
        marginTop: 5
    }
})

export default ItemCardComponent