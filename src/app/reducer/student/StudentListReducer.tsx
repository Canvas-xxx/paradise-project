export const studentListReducer = (state: any = {id: '', name: ''}, action: any) => {
    switch(action.type) {
        case 'GET_NEW_STUDENT_LIST':
            return state = action.payload
        default:
            return state
    }
}