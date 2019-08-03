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

const FETCH_PARENT = 'FETCH_PARENT'
const FETCH_PARENT_FULFILLED = 'FETCH_PARENT_FULFILLED'
const FETCH_PARENT_REJECTED = 'FETCH_PARENT_REJECTED'

export const fetchParent = () => ({ type: FETCH_PARENT })
export const fetchParentFulfilled = (payload:  Object) => ({ type: FETCH_PARENT_FULFILLED, payload: payload })
export const fetchParentRejected = (error: any) => ({ type: FETCH_PARENT_REJECTED, payload: error, error: true })

export const fetchParentEpic: Epic<FluxStandardAction> =action$ =>
  action$.pipe(
      ofType(FETCH_PARENT),
      mergeMap((payload: any) =>
        // ajax.get(`http://localhost:8099/parentDetail`, {
        ajax.get(`http://103.30.124.135:8099/parentDetail`, {
            'Content-Type': 'application/json',
            'id': payload.payload.USER_PAR_SEQ_ID
        })
        .pipe(
            map( response =>
                fetchParentFulfilled(response.response)
            ),
            catchError( (error) => of(fetchParentRejected({
                status: error.status,
                message: error.response.message
            })))
        )
      )
  )