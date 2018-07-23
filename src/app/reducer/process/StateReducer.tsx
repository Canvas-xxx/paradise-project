export const stateReducer = (state: any = {}, action: any) => {
    switch (action.type) {
        case 'FETCH_STATE':
            return state = {}
        case 'FETCH_STATE_FULFILLED':
            return state = action.payload
        default:
            return state
    }
}