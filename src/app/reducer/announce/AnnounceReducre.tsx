export const announceReducer = (state: any = [], action: any) => {
    switch(action.type) {
        case 'FETCH_ANNOUNCE':
            return state = []
        case 'FETCH_ANNOUNCE_FULFILLED':
            return state = action.payload
        default:
            return state
    }
}

export const announceRejectedReducer = (state: any = {}, action: any) => {
    switch(action.type) {
        case 'FETCH_ANNOUNCE_REJECTED':
            return state = action.payload
        default:
            return state
    }
}