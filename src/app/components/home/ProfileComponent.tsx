import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-elements'
import store from '../../store'

export interface Props {
    
}

interface State {
    PAR_NAME: string,
    PAR_PHONE: string,
    Avatar: string
}

class ProfileComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            PAR_NAME: '',
            PAR_PHONE: '',
            Avatar: ''
        }
    }

    componentDidMount() {
        store.subscribe(() => { 
            return this.setState(store.getState().parent)
         })
    }

    componentWillReceiveProps() {
        this.setState({
            Avatar: store.getState().parent.PAR_NAME.split(' ')[0][0] + store.getState().parent.PAR_NAME.split(' ')[1][0]
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Avatar large rounded title={this.state.Avatar} />
                <View style={styles.detailContainer}>
                    <Text style={styles.nameText}>{this.state.PAR_NAME}</Text>
                    <Text style={styles.nameText}>{this.state.PAR_PHONE}</Text>
                </View>
            </View>
        )
    }
}

const renderAvartar = (image: any, title: string) => {
    switch(image) {
        case null:
            return ( <Avatar large rounded title={title} /> )
        default:
            return ( <Avatar large rounded title={title} source={{uri: image}} /> )
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6eaab'
    },
    detailContainer: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    nameText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5
    },
    detailText: {
        color: 'white',
        fontSize: 16,
        marginTop: 5
    }
})

export default ProfileComponent