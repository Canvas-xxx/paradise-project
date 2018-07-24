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

const FETCH_USER = 'FETCH_USER'
const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED'
const FETCH_USER_REJECTED = 'FETCH_USER_REJECTED'

const FETCH_SENDER = 'FETCH_SENDER'
const FETCH_SENDER_FULFILLED = 'FETCH_SENDER_FULFILLED'
const FETCH_PARENT_REJECTED = 'FETCH_PARENT_REJECTED'

export const fetchUser = () => ({ type: FETCH_USER })
export const fetchUserFulfilled = (payload: Object) => ({ type: FETCH_USER_FULFILLED, payload: payload })
export const fetchUserRejected = (error: any) => ({ type: FETCH_USER_REJECTED, payload: error, error: true })

export const fetchSender = () => ({ type: FETCH_SENDER })
export const fetchSenderFulfilled = (payload: Object) => ({ type: FETCH_SENDER_FULFILLED, payload: payload })
export const fetchParentRejected = (error: any) => ({ type: FETCH_PARENT_REJECTED, payload: error, error: true })

export const fetchUserEpic: Epic<FluxStandardAction> = action$ => 
    action$.pipe(
        ofType(FETCH_USER),
        mergeMap((payload: any) =>
            // ajax.post(`http://localhost:8099/authenticationLogin`,{
            ajax.post(`http://203.121.143.61:8099/authenticationLogin`,{
                username: payload.payload.username,
                password: payload.payload.password
            })
            .pipe(
                map( response => 
                    fetchUserFulfilled(response.response)
                ),
                catchError( (error) => of(fetchUserRejected({
                    status: error.status,
                    message: error.response.message
                })))
            )
        )
    )

export const fetchSenderEpic: Epic<FluxStandardAction> = action$ => 
    action$.pipe(
        ofType(FETCH_SENDER),
        mergeMap((payload: any) =>
            // ajax.post(`http://localhost:8099/updateSenderID`,{
            ajax.post(`http://203.121.143.61:8099/updateSenderID`,{
                username: payload.payload.username,
                senderId: payload.payload.senderId
            })
            .pipe(
                map( response => 
                    fetchSenderFulfilled(response.response)
                ),
                catchError( (error) => of(fetchParentRejected({
                    status: error.status,
                    message: error.response.message
                })))
            )
        )
    )
