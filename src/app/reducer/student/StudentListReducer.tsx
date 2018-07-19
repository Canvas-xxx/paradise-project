export const studentListReducer = (state: any = [], action: any) => {
    switch(action.type) {
        case 'SET_NEW_STUDENT_LIST':
            return state = [action.payload]
        case 'ADD_STUDENT_LIST':
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}