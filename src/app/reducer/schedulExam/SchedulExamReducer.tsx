export const schedulExamReducer = (state: any = {}, action: any) => {
    switch (action.type) {
        case 'FETCH_SCHEDUL_EXAM':
            return state = {}
        case 'FETCH_SCHEDUL_EXAM_FULFILLED':
            return state = action.payload
        default:
            return state
    }
}

export const schedulExamRejectedReducer = (state: any = {}, action: any) => {
    switch(action.type) {
        case 'FETCH_SCHEDUL_EXAM_REJECTED':
            return state = action.payload
        default:
            return state
    }
}