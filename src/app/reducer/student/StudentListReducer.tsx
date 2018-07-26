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

export const studentListRejectedReducer = (state: any = {}, action: any) => {
    switch(action.type) {
        case 'FETCH_STUDENT_LIST_REJECTED':
            return state = action.payload
        default:
            return state
    }
}