export const stateListReducer = (state: any = [], action: any) => {
    switch (action.type) {
        case 'FETCH_STATE_LIST':
            return state = []
        case 'FETCH_STATE_LIST_FULFILLED':
            return state = action.payload
        default:
            return state
    }
}

export const stateListRejectedReducer = (state: any = {}, action: any) => {
    switch(action.type) {
        case 'FETCH_STATE_LIST_REJECTED':
            return state = action.payload
        default:
            return state
    }
}