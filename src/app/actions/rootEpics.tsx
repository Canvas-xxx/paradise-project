import { combineEpics } from 'redux-observable'
import { fetchUserEpic, fetchSenderEpic } from './epic/userEpic'
import { fetchParentEpic } from './epic/parentEpic'
import { fetchStudentEpic, fetchStudentListEpic } from './epic/studentListEpic'
import { fetchStateEpic, fetchStateListEpic } from './epic/stateEpic'

const rootEpics = combineEpics(
    fetchUserEpic,
    fetchSenderEpic,
    fetchParentEpic,
    fetchStudentEpic,
    fetchStudentListEpic,
    fetchStateEpic,
    fetchStateListEpic
)

export default rootEpics