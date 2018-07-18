import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

export interface Props {
    image: any,
    id: string,
    name: string
}

interface State {
    image: any
    name: string
    title: string
}

class ItemCardComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            image: props.image,
            name: props.name,
            title: ''
        }
    }

    componentDidMount() {
        const name = this.state.name
        switch (name.split(' ').length) {
            case 2:
                this.setState({
                    title: name.split(' ')[0].slice(0, 1).toLocaleUpperCase() + name.split(' ')[1].slice(0, 1).toLocaleUpperCase()
                })
                break
            default:
                this.setState({
                    title: name.slice(0, 2).toLocaleUpperCase()
                })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.cardBox} activeOpacity={.8} onPress={() => {Actions.tracking({id: this.props.id})}}>
                    {renderAvartar(this.state.image, this.state.title)}
                    <Text style={styles.cardText}>{this.state.name}</Text>
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
        alignItems: 'center',
    },
    cardBox: {
        width: '90%',
        height: '90%',
        backgroundColor: 'white',
        flexDirection : 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    cardText: {
        fontSize: 14,
        color: '#639c45',
        marginTop: 5
    }
})

export default ItemCardComponent