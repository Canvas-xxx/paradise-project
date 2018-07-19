export const studentReducer = (state: any = { id: '', school: '', name: '', class: '' }, action: any) => {
    switch(action.type) {
        case 'GET_NEW_STUDENT':
            return state = action.payload
        default:
            return state
    }
}