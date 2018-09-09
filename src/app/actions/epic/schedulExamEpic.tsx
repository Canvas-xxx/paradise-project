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

const FETCH_SCHEDUL_EXAM = 'FETCH_SCHEDUL_EXAM'
const FETCH_SCHEDUL_EXAM_FULFILLED = 'FETCH_SCHEDUL_EXAM_FULFILLED'
const FETCH_SCHEDUL_EXAM_REJECTED = 'FETCH_SCHEDUL_EXAM_REJECTED'

export const fetchSchedulExam = () => ({ type: FETCH_SCHEDUL_EXAM })
export const fetchSchedulExamFulfilled = (payload: Object) => ({ type: FETCH_SCHEDUL_EXAM_FULFILLED, payload: payload })
export const fetchSchedulExamRejected = (error: any) => ({ type: FETCH_SCHEDUL_EXAM_REJECTED, payload: error, error: true })

export const fetchSchedulExamEpic: Epic<FluxStandardAction> = action$ =>
    action$.pipe(
        ofType(FETCH_SCHEDUL_EXAM),
        mergeMap((payload: any) =>
            ajax.post(`http://203.121.143.61:8099/getScheduExam`, {
                'className': payload.payload.className,
                'schoolId': payload.payload.schoolId
            })
            .pipe(
                map( response => 
                    fetchSchedulExamFulfilled(response.response)
                ),
                catchError( (error) => of(fetchSchedulExamRejected({
                    status: error.status,
                    message: error.response.message
                })))
            )
        )
    )