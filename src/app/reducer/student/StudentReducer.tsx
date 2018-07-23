export const studentReducer = (state: any = {}, action: any) => {
    switch (action.type) {
        case 'FETCH_STUDENT':
            return state = {}
        case 'FETCH_STUDENT_FULFILLED':
            return state = action.payload
        default:
            return state
    }
}