export const stateListReducer = (state: any = {  }, action: any) => {
    switch (action.type) {
        case 'GET_NEW_STATE_LIST':
            return state = action.payload
        default:
            return state
    }
}