import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import ProfileComponent from '../../components/home/ProfileComponent'
import ItemCardComponent from '../../components/home/ItemCardComponent'

export interface Props {

}

interface State {

}

const mockData: any[] = [
    { id: 'index1' },
    { id: 'index2' },
    { id: 'index3' },
    { id: 'index4' },
    { id: 'index5' },
    { id: 'index6' }
]

class HomeScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <ProfileComponent />
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
                <ItemCardComponent key={index} id={item.id} />
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