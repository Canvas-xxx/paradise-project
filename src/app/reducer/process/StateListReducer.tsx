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