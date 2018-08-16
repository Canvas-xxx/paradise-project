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
            const obj: any = JSON.parse(user)
            store.dispatch({ type: 'FETCH_USER_FULFILLED', payload: obj })
            if(obj) {
                this.setState({USER_PAR_SEQ_ID: obj['id']})
                store.subscribe(() => { return this.setState(store.getState().user) })
                store.dispatch({ type: 'FETCH_PARENT', payload: { USER_PAR_SEQ_ID: this.state.USER_PAR_SEQ_ID } })
                store.dispatch({ type: 'FETCH_STUDENT_LIST', payload: { USER_PAR_SEQ_ID: this.state.USER_PAR_SEQ_ID } })
                AsyncStorage.getItem('user').then((sender) => {
                    const senderObj: any = JSON.parse(sender)
                    store.dispatch({ type: 'FETCH_SENDER_FULFILLED', payload: senderObj })
                })
            }
        }).catch( (error) => {
            alert('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง')
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