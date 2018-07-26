export const parentReducer = (state: any = {}, action: any) => {
    switch(action.type) {
        case 'FETCH_PARENT':
            return state = {}
        case 'FETCH_PARENT_FULFILLED':
            return state = action.payload
        default:
            return state
    }
}

export const parentRejectedReducer = (state: any = {}, action: any) => {
    switch(action.type) {
        case 'FETCH_PARENT_REJECTED':
            return state = action.payload
        default:
            return state
    }
}