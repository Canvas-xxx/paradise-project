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

const FETCH_STUDENT = 'FETCH_STUDENT'
const FETCH_STUDENT_FULFILLED = 'FETCH_STUDENT_FULFILLED'
const FETCH_STUDENT_REJECTED = 'FETCH_STUDENT_REJECTED'

export const fetchStudent = () => ({ type: FETCH_STUDENT })
export const fetchStudentFulfilled = (payload: Object) => ({ type: FETCH_STUDENT_FULFILLED, payload: payload })
export const fetchStudentRejected = (error: any) => ({ type: FETCH_STUDENT_REJECTED, payload: error, error: true })

export const fetchStudentEpic: Epic<FluxStandardAction> =action$ =>
    action$.pipe(
        ofType(FETCH_STUDENT),
        mergeMap((payload: any) =>
            ajax.get(`http://localhost:8099/studentDetail`, {
            // ajax.get(`http://203.121.143.61:8099/studentDetail`, {
                'Content-Type': 'application/json',
                'id': payload.payload.STU_SEQ_ID
            })
            .pipe(
                map( response =>
                    fetchStudentFulfilled(response.response)
                ),
                catchError( (error) => of(fetchStudentRejected({
                    status: error.status,
                    message: error.response.message
                })))
            )
        )
    )

const FETCH_STUDENT_LIST = 'FETCH_STUDENT_LIST'
const FETCH_STUDENT_LIST_FULFILLED = 'FETCH_STUDENT_LIST_FULFILLED'
const FETCH_STUDENT_LIST_REJECTED = 'FETCH_STUDENT_LIST_REJECTED'

export const fetchStudentList = () => ({ type: FETCH_STUDENT_LIST })
export const fetchStudentListFulfilled = (payload: Object) => ({ type: FETCH_STUDENT_LIST_FULFILLED, payload: payload })
export const fetchStudentListRejected = (error: any) => ({ type: FETCH_STUDENT_LIST_REJECTED, payload: error, error: true })

export const fetchStudentListEpic: Epic<FluxStandardAction> =action$ =>
    action$.pipe(
        ofType(FETCH_STUDENT_LIST),
        mergeMap((payload: any) =>
            ajax.get(`http://localhost:8099/studentList`, {
            // ajax.get(`http://203.121.143.61:8099/studentList`, {
                'Content-Type': 'application/json',
                'id': payload.payload.USER_PAR_SEQ_ID
            })
            .pipe(
                map( response =>
                    fetchStudentListFulfilled(response.response)
                ),
                catchError( (error) => of(fetchStudentListRejected({
                    status: error.status,
                    message: error.response.message
                })))
            )
        )
    )