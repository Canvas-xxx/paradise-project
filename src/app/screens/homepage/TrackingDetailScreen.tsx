import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import DetailBoxComponent from '../../components/home/DetailBoxComponent'
import store from '../../store'
import { setStateDetail } from '../../actions'

export interface Props {
    id: string
}

interface State {
    id: string,
    state: any
}

function getStateDetail(id: string) {
    return fetch('http://203.121.143.61:8099/stateDetail', 
    { 
        method: 'GET',
        headers: { 'Content-Type': 'application/json', id: id } 
    })
        .then((response) => response.json())
        .catch((error) => { console.log(error) })
}

class TrackingDetailScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            id: props.id,
            state: {}
        }
    }

    componentDidMount() {
        store.subscribe(() => { return this.setState(store.getState()) })
        getStateDetail(this.state.id).then( (response) => {
            console.log(response)
            const stateObj: Object = {
                id: response['SBT_SEQ_ID'],
                school: '',
                teacher: response['TECH_NAME'],
                teacherPhone: response['TECH_PHONE'],
                driver: response['DRV_NAME'],
                driverPhone: response['DRV_PHONE'],
                bus: response['BUS_LICENSE_PLATE'],
                time: response['SBT_DATE_START'],
                status: response['SBT_STATUS']
            }
            store.dispatch(setStateDetail(stateObj))
            this.setState({
                state: store.getState().state
            })
            console.log(this.state.state)
        }, (error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollContain}>
                    <View style={styles.bodyScroll}>
                        <DetailBoxComponent />
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