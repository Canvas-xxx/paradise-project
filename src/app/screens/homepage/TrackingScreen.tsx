import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import TrackingCardComponent from '../../components/home/TrackingCardComponent'
import CardListItemComponent from '../../components/home/CardListItemComponent'
import store from '../../store'
import { setStudentDetail, setState, addState } from '../../actions'

export interface Props {
    id: string
}

interface State {
    id: string,
    student: any,
    stateList: any
}

function getStudentDetail(id: string) {
    return fetch('http://203.121.143.61:8099/studentDetail', 
    { 
        method: 'GET',
        headers: { 'Content-Type': 'application/json', id: id } 
    })
        .then((response) => response.json())
        .catch((error) => { console.log(error) })
}

class TrackingScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            id: props.id,
            student: [],
            stateList: []
        }
    }

    componentDidMount() {
        getStudentDetail(this.state.id).then( (response) => {
            const stdObj: Object = {
                id: response['STU_SEQ_ID'],
                school: '',
                name: response['STU_NAME_TH'],
                class: response['STU_CLASS']
            }
            store.dispatch(setStudentDetail(stdObj))
            response['state'].forEach( (state: any, index: Number) => {
                const st: Object = {
                    id: state['SBT_SEQ_ID'],
                    status: state['SBT_STATUS'],
                    time: state['SBT_DATE_START']
                }
                switch(index) {
                    case 1:
                        store.dispatch(setState(st))
                        break
                    default:
                        store.dispatch(addState(st))
                }
            })
            this.setState({
                student: store.getState().student,
                stateList: store.getState().stateList
            })
            console.log(this.state)
        }, (error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContain}>
                    {renderStudent([this.state.student])}
                </View>
                <View style={{flex: 1}}>
                    <ScrollView style={{flex: 1}}>
                        <View style={styles.listContain}>
                            {renderList(this.state.stateList)}
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const renderStudent = (item: any[]) => {
    return (
        item.map( (i, index) => {
            return (
                <TrackingCardComponent key={index} />
            )
        })
    )
}

const renderList = (items: any[]) => {
    return ( 
        items.map( (item, index) => {
            return ( 
                <CardListItemComponent key={index} details={item} /> 
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
    cardContain: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    listContain: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default TrackingScreen