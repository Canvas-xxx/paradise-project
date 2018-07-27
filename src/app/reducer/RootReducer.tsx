import { combineReducers } from 'redux'
import { userReducer, senderIdReducer, senderReducer, userRejectedReducer } from './parent/UserReducer'
import { parentReducer } from './parent/ParentReducer'
import { studentReducer } from './student/StudentReducer'
import { studentListReducer } from './student/StudentListReducer'
import { stateReducer } from './process/StateReducer'
import { stateListReducer } from './process/StateListReducer'

export default combineReducers({
    user: userReducer,
    userReject: userRejectedReducer,
    parent: parentReducer,
    student: studentReducer,
    studentList: studentListReducer,
    state: stateReducer,
    stateList: stateListReducer,
    senderId: senderIdReducer,
    sender: senderReducer
})