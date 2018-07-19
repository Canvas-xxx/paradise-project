export const stateListReducer = (state: any = [], action: any) => {
    switch (action.type) {
        case 'SET_NEW_STATE_LIST':
            return state = [action.payload]
        case 'ADD_STATE_LIST':
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}