import { combineReducers } from 'redux'
import { userReducer, senderIdReducer, senderReducer, userRejectedReducer, senderRejectedReducer } from './parent/UserReducer'
import { parentReducer, parentRejectedReducer } from './parent/ParentReducer'
import { studentReducer, studentRejectedReducer } from './student/StudentReducer'
import { studentListReducer, studentListRejectedReducer } from './student/StudentListReducer'
import { stateReducer, stateRejectedReducer } from './process/StateReducer'
import { stateListReducer, stateListRejectedReducer } from './process/StateListReducer'

export default combineReducers({
    user: userReducer,
    userReject: userRejectedReducer,
    parent: parentReducer,
    parentReject: parentRejectedReducer,
    student: studentReducer,
    studentReject: studentRejectedReducer,
    studentList: studentListReducer,
    studentListReject: studentListRejectedReducer,
    state: stateReducer,
    statReject: stateRejectedReducer,
    stateList: stateListReducer,
    stateListReject: stateListRejectedReducer,
    senderId: senderIdReducer,
    sender: senderReducer,
    senderReject: senderRejectedReducer
})