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

const FETCH_ANNOUNCE = 'FETCH_ANNOUNCE'
const FETCH_ANNOUNCE_FULFILLED = 'FETCH_ANNOUNCE_FULFILLED'
const FETCH_ANNOUNCE_REJECTED = 'FETCH_ANNOUNCE_REJECTED'

export const fetchAnnounce = () => ({ type: FETCH_ANNOUNCE })
export const fetchAnnounceFulfilled = (payload: Object) => ({ type: FETCH_ANNOUNCE_FULFILLED, payload: payload })
export const fetchAnnounceRejected = (error: any) => ({type: FETCH_ANNOUNCE_REJECTED, payload: error })

export const fetchAnnounceEpic: Epic<FluxStandardAction> =action$ =>
  action$.pipe(
      ofType(FETCH_ANNOUNCE),
      mergeMap((payload: any) =>
        // ajax.get(`http://localhost:8099/getAnnounce`, {
        ajax.get(`http://203.121.143.61:8099/getAnnounce`, {
            'Content-Type': 'application/json',
            'schoolId': payload.payload.SCH_SEQ_ID
        })
        .pipe(
            map( response =>
                fetchAnnounceFulfilled(response.response)
            ),
            catchError( (error) => of(fetchAnnounceRejected({
                status: error.status,
                message: error.response.message
            })))
        )
      )
  )