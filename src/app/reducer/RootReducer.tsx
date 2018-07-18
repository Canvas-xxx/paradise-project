import { combineReducers } from 'redux'
import { studentReducer } from './student/StudentReducer'

export default combineReducers({
    student: studentReducer
})