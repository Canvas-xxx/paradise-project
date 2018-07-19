export const parentReducer = (state: any = { id: '', name: '' }, action: any) => {
    switch(action.type) {
        case 'GET_NEW_PARENT':
            return state = action.payload
        default:
            return state
    }
}