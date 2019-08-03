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

const FETCH_BUS_LOCATION = 'FETCH_BUS_LOCATION'
const FETCH_BUS_LOCATION_FULFILLED = 'FETCH_BUS_LOCATION_FULFILLED'
const FETCH_BUS_LOCATION_REJECTED = 'FETCH_BUS_LOCATION_REJECTED'

export const fetchBusLocation = () => ({ type: FETCH_BUS_LOCATION })
export const fetchBusLocationFulfilled = (payload: Object) => ({ type: FETCH_BUS_LOCATION_FULFILLED, payload: payload })
export const fetchBusLocationRejected = (error: any) => ({ type: FETCH_BUS_LOCATION_REJECTED, payload: error, error: true })

export const fetchBusLocationEpic: Epic<FluxStandardAction> = action$ =>
    action$.pipe(
        ofType(FETCH_BUS_LOCATION),
        mergeMap((payload: any) =>
            ajax.get(`http://103.30.124.135:8099/getBusLocation`, {
                'Content-Type': 'application/json',
                'busId': payload.payload.busId,
                'schoolId': payload.payload.schoolId
            })
            .pipe(
                map( response => 
                    fetchBusLocationFulfilled(response.response)
                ),
                catchError( (error) => of(fetchBusLocationRejected({
                    status: error.status,
                    message: error.response.message
                })))
            )
        )
    )