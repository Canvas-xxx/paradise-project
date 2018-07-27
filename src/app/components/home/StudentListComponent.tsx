import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import ItemCardComponent from './ItemCardComponent'
import store from '../../store'

export interface Props {
    
}

interface State {
    PAR_NAME: string,
    PAR_PHONE: string,
    Avatar: string,
    studentList: any
}

class StudentListComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            PAR_NAME: '',
            PAR_PHONE: '',
            Avatar: '',
            studentList: []
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            return this.setState(store.getState().studentList)
         })
    }

    componentWillReceiveProps() {
        if(store.getState().parent.PAR_NAME) {
            this.setState({
                studentList: store.getState().studentList,
                Avatar: store.getState().parent.PAR_NAME.split(' ')[0][0] + store.getState().parent.PAR_NAME.split(' ')[1][0]
            })
        } else {
            this.setState({
                studentList: [],
                Avatar: ''
            })
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.listContainer}>
                    {renderItems(this.state.studentList)}
                </View>
            </ScrollView>
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

export default StudentListComponent