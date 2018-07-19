import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import ProfileComponent from '../../components/home/ProfileComponent'
import ItemCardComponent from '../../components/home/ItemCardComponent'
import store from '../../store'
import { setParent, setStudentList, addStudentList } from '../../actions'

export interface Props {

}

interface State {
    studentList: any
}

function getParentDetail() {
    return fetch('http://203.121.143.61:8099/parentDetail', 
    { 
        method: 'GET',
        headers: { 'Content-Type': 'application/json', id: '2' } 
    })
        .then((response) => response.json())
        .catch((error) => { console.log(error) })
}

class HomeScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            studentList: []
        }
    }

    componentDidMount() {
        store.subscribe(() => { return this.setState(store.getState()) })
        getParentDetail().then( (response) => {
            const obj: Object = {
                id: response['PAR_SEQ_ID'],
                name: response['PAR_NAME']
            }
            store.dispatch(setParent(obj))
            response['studentList'].forEach( (student: any, index: number) => {
                const std: Object = {
                    id: student['STU_SEQ_ID'],
                    name: student['STU_NAME_TH']
                }
                switch(index) {
                    case 1:
                        store.dispatch(setStudentList(std))
                        break
                    default:
                        store.dispatch(addStudentList(std))
                }
            })
            console.log(this.state)
        }, (error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ProfileComponent />
                <View style={{flex: 2}}>
                    <ScrollView> 
                        <View style={styles.listContainer}>
                            {renderItems(this.state.studentList)}
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
                <ItemCardComponent key={index} student={item} />
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