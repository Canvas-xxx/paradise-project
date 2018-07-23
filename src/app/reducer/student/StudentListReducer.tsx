export const studentListReducer = (state: any = [], action: any) => {
    switch (action.type) {
        case 'FETCH_STUDENT_LIST':
            return state = []
        case 'FETCH_STUDENT_LIST_FULFILLED':
            return state = action.payload
        default:
            return state
    }
}