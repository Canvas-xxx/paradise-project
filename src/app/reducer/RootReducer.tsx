import { combineReducers } from 'redux'
import { studentReducer } from './student/StudentReducer'
import { studentListReducer } from './student/StudentListReducer'
import { stateReducer } from './process/StateReducer'
import { stateListReducer } from './process/StateListReducer'

export default combineReducers({
    student: studentReducer,
    studentList: studentListReducer,
    state: stateReducer,
    stateList: stateListReducer
})