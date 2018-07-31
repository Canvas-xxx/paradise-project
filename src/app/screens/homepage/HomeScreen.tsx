import React from 'react'
import { View, StyleSheet, AsyncStorage } from 'react-native'
import ProfileComponent from '../../components/home/ProfileComponent'
import StudentListComponent from '../../components/home/StudentListComponent'
import store from '../../store'

export interface Props {
    
}

interface State {
    USER_PAR_SEQ_ID: string
}

class HomeScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            USER_PAR_SEQ_ID: ''
        }
    }

    componentWillMount() {
        AsyncStorage.getItem('id').then((user) => {
            if(user) {
                this.setState({USER_PAR_SEQ_ID: user})
                store.subscribe(() => { return this.setState(store.getState().user) })
                store.dispatch({ type: 'FETCH_PARENT', payload: { USER_PAR_SEQ_ID: this.state.USER_PAR_SEQ_ID } })
                store.dispatch({ type: 'FETCH_STUDENT_LIST', payload: { USER_PAR_SEQ_ID: this.state.USER_PAR_SEQ_ID } })
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ProfileComponent />
                <View style={{flex: 2, width: '100%'}}>
                    <StudentListComponent />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})

export default HomeScreen