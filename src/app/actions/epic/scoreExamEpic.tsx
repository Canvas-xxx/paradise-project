import { ofType, Epic } from 'redux-observable'
import { mergeMap, map, catchError } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import { of } from 'rxjs'

interface FluxStandardAction {
    type: string | symbol | any;
    payload?: any;
    error?: boolean | any;
    meta?: any
}

const FETCH_SCORE_EXAM = 'FETCH_SCORE_EXAM'
const FETCH_SCORE_EXAM_FULFILLED = 'FETCH_SCORE_EXAM_FULFILLED'
const FETCH_SCORE_EXAM_REJECTED = 'FETCH_SCORE_EXAM_REJECTED'

export const fetchScoreExam = () => ({ type: FETCH_SCORE_EXAM })
export const fetchScoreExamFulfilled = (payload: Object) => ({ type: FETCH_SCORE_EXAM_FULFILLED, payload: payload })
export const fetchScoreExamRejected = (error: any) => ({ type: FETCH_SCORE_EXAM_REJECTED, payload: error, error: true })

export const fetchScoreExamEpic: Epic<FluxStandardAction> = action$ =>
    action$.pipe(
        ofType(FETCH_SCORE_EXAM),
        mergeMap((payload: any) =>
            ajax.post(`http://103.30.124.135:8099/getScoreExam`, {
                'studentId': payload.payload.studentId,
                'className': payload.payload.className,
                'schoolId': payload.payload.schoolId
            })
            .pipe(
                map( response => 
                    fetchScoreExamFulfilled(response.response)
                ),
                catchError( (error) => of(fetchScoreExamRejected({
                    status: error.status,
                    message: error.response.message
                })))
            )
        )
    )