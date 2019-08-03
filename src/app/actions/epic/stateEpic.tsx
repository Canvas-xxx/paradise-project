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

const FETCH_STATE_LIST = 'FETCH_STATE_LIST'
const FETCH_STATE_LIST_FULFILLED = 'FETCH_STATE_LIST_FULFILLED'
const FETCH_STATE_LIST_REJECTED = 'FETCH_STATE_LIST_REJECTED'

export const fetchStateList = () => ({ type: FETCH_STATE_LIST })
export const fetchStateListFulfilled = (payload:  Object) => ({ type: FETCH_STATE_LIST_FULFILLED, payload: payload })
export const fetchStateListRejected = (error: any) => ({ type: FETCH_STATE_LIST_REJECTED, payload: error, error: true })

export const fetchStateListEpic: Epic<FluxStandardAction> =action$ =>
  action$.pipe(
      ofType(FETCH_STATE_LIST),
      mergeMap((payload: any) =>
        // ajax.get(`http://localhost:8099/stateDetail`, {
        ajax.get(`http://103.30.124.135:8099/stateDetail`, {
            'Content-Type': 'application/json',
            'studentId': payload.payload.STU_SEQ_ID,
            'schoolId': payload.payload.SCH_SEQ_ID,
            'techId': payload.payload.TECH_SEQ_ID
        })
        .pipe(
            map( response =>
                fetchStateListFulfilled(response.response)
            ),
            catchError( (error) => of(fetchStateListRejected({
                status: error.status,
                message: error.response.message
            })))
        )
      )
  )

//   const FETCH_STATE = 'FETCH_STATE'
//   const FETCH_STATE_FULFILLED = 'FETCH_STATE_FULFILLED'
//   const FETCH_STATE_REJECTED = 'FETCH_STATE_REJECTED'
  
//   export const fetchState = () => ({ type: FETCH_STATE })
//   export const fetchStateFulfilled = (payload:  Object) => ({ type: FETCH_STATE_FULFILLED, payload: payload })
//   export const fetchStateRejected = (error: any) => ({ type: FETCH_STATE_REJECTED, payload: error, error: true })
  
//   export const fetchStateEpic: Epic<FluxStandardAction> =action$ =>
//     action$.pipe(
//         ofType(FETCH_STATE),
//         mergeMap((payload: any) =>
//           ajax.get(`http://localhost:8099/stateDetail`, {
//             // ajax.get(`http://103.30.124.135:8099/stateDetail`, {
//               'Content-Type': 'application/json',
//               'id': payload.payload.STU_SEQ_ID,
//           })
//           .pipe(
//               map( response =>
//                   fetchStateFulfilled(response.response)
//               ),
//               catchError( (error) => of(fetchStateRejected({
//                   status: error.status,
//                   message: error.response.message
//               })))
//           )
//         )
//     )