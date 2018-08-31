import { combineReducers } from 'redux'
import { userReducer, senderIdReducer, senderReducer, userRejectedReducer, senderRejectedReducer } from './parent/UserReducer'
import { parentReducer, parentRejectedReducer } from './parent/ParentReducer'
import { studentReducer, studentRejectedReducer } from './student/StudentReducer'
import { studentListReducer, studentListRejectedReducer } from './student/StudentListReducer'
import { stateReducer, stateRejectedReducer } from './process/StateReducer'
import { stateListReducer, stateListRejectedReducer } from './process/StateListReducer'
import { announceReducer, announceRejectedReducer } from './announce/AnnounceReducre'
import { busReducer, busRejectedReducer } from './bus/BusReducer'
import { scoreExamReducer, scoreExamRejectedReducer } from './scoreExam/ScoreExampleReducer'

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
    senderReject: senderRejectedReducer,
    announce: announceReducer,
    announceReject: announceRejectedReducer,
    bus: busReducer,
    busReject: busRejectedReducer,
    score: scoreExamReducer,
    scoreReject: scoreExamRejectedReducer
})