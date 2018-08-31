export const scoreExamReducer = (state: any = {}, action: any) => {
    switch (action.type) {
        case 'FETCH_SCORE_EXAM':
            return state = {}
        case 'FETCH_SCORE_EXAM_FULFILLED':
            return state = action.payload
        default:
            return state
    }
}

export const scoreExamRejectedReducer = (state: any = {}, action: any) => {
    switch(action.type) {
        case 'FETCH_SCORE_EXAM_REJECTED':
            return state = action.payload
        default:
            return state
    }
}