import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-elements'

export interface Props {
    image: any,
    name: string,
    details: string[]
}

interface State {
    image: any,
    name: string,
    details: string[],
    title: string
}

class ProfileComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            image: props.image,
            name: props.name,
            details: props.details,
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
                {renderAvartar(this.state.image, this.state.title)}
                <View style={styles.detailContainer}>
                    <Text style={styles.nameText}>{this.state.name}</Text>
                    {renderDetail(this.state.details)}
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

const renderDetail = (details: string[]) => {
    return (
        details.map( (detail, index) => {
            return (
                <Text key={index} style={styles.detailText}>{detail}</Text>
            )
        })
    )
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