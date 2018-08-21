export const busReducer = (state: any = {}, action: any) => {
    switch(action.type) {
        case 'FETCH_BUS_LOCATION':
            return state = {}
        case 'FETCH_BUS_LOCATION_FULFILLED':
            return state = action.payload
        default:
            return state
    }
}

export const busRejectedReducer = (state: any = {}, action: any) => {
    switch(action.type) {
        case 'FETCH_BUS_LOCATION_REJECTED':
            return state = action.payload
        default:
            return state
    }
}