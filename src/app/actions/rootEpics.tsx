import { combineEpics } from 'redux-observable'
import { fetchUserEpic, fetchSenderEpic } from './epic/userEpic'
import { fetchParentEpic } from './epic/parentEpic'
import { fetchStudentEpic, fetchStudentListEpic } from './epic/studentListEpic'
import { fetchStateListEpic } from './epic/stateEpic'
import { fetchAnnounceEpic } from './epic/announceEpic'
import { fetchBusLocationEpic } from './epic/busEpic'
import { fetchScoreExamEpic } from './epic/scoreExamEpic'
import { fetchSchedulExamEpic } from './epic/schedulExamEpic'

const rootEpics = combineEpics(
    // fetchUserEpic,
    fetchSenderEpic,
    fetchParentEpic,
    fetchStudentEpic,
    fetchStudentListEpic,
    // fetchStateEpic,
    fetchStateListEpic,
    fetchAnnounceEpic,
    fetchBusLocationEpic,
    fetchScoreExamEpic,
    fetchSchedulExamEpic
)

export default rootEpics