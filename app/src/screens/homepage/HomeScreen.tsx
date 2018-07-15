import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import ProfileComponent from '../../components/home/ProfileComponent'
import ItemCardComponent from '../../components/home/ItemCardComponent'

export interface Props {

}

interface State {

}

const mockData: any[] = [
    { image: null, name: 'John Lennon' },
    { image: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg', name: 'John Henry' },
    { image: null, name: 'John Mayor' },
    { image: null, name: 'John Colson' },
    { image: null, name: 'John Park' },
    { image: null, name: 'John Henderson' }
]

class HomeScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <ProfileComponent image='https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' 
                    name='Worachote Suwanyothin' details={['10 Sep 1994', 'Developer']} />
                <View style={{flex: 2}}>
                    <ScrollView> 
                        <View style={styles.listContainer}>
                            {renderItems(mockData)}
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const renderItems = (items: any[]) => {
    return (
        items.map( (item, index) => {
            return (
                <ItemCardComponent key={index} image={item.image} name={item.name} />
            )
        } )
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    listContainer: {
        flex: 1,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '100%',
        paddingTop: 30,
        paddingBottom: 30
    }
})

export default HomeScreen