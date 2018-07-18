import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import DetailBoxComponent from '../../components/home/DetailBoxComponent'

export interface Props {
    id: string
}

interface State {
    id: string
}

const mockList = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 }
]

class TrackingDetailScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollContain}>
                    <View style={styles.bodyScroll}>
                        {detailBox(mockList)}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const detailBox = (items: any[]) => {
    return (
        items.map( (item, index) => {
            return (
                <DetailBoxComponent key={index} details={item} />
            )
        })
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    scrollContain: {
        flex: 1,
        width: '100%'
    },
    bodyScroll: {
        flexWrap: 'wrap',
        width: '100%',
        paddingTop: 30,
        paddingBottom: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default TrackingDetailScreen